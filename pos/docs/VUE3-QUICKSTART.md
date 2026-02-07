# Vue 3 快速開始指南

> **目的**：建立 Vue 3 + TypeScript + Pinia + Vant 4 專案
>
> **📑 文件導覽**：[README](./README.md) | [POS-PLANNER](./POS-PLANNER.md) | [VUE3-MIGRATION](./VUE3-MIGRATION-GUIDE.md)

## 專案初始化步驟

### 1. 建立 Vue 3 專案

```bash
# 使用 Vite 建立 Vue 3 + TypeScript 專案
npm create vite@latest hangro-pos -- --template vue-ts
cd hangro-pos

# 安裝依賴
npm install
```

### 2. 安裝核心依賴

```bash
# 狀態管理
npm install pinia

# UI 組件庫（Vant 4）
npm install vant@4

# 路由
npm install vue-router@4

# 本地資料庫（IndexedDB Wrapper）
npm install dexie

# 工具庫
npm install @vueuse/core

# Day.js（日期處理）
npm install dayjs
```

### 3. 安裝 Capacitor

```bash
# Capacitor 核心
npm install @capacitor/core @capacitor/cli

# iOS 平台
npm install @capacitor/ios

# Capacitor 插件
npm install @capacitor/printer
npm install @capacitor/filesystem
npm install @capacitor/network
npm install @capacitor/local-notifications

# 初始化 Capacitor
npx cap init "HangroPOS" "com.hangrou.pos"
```

### 4. 配置 Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
```

### 5. 配置 Capacitor

```typescript
// capacitor.config.ts
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hangrou.pos',
  appName: '夯肉 HANGROU',
  webDir: 'dist',
  bundledWebRuntime: false,

  server: {
    url: 'http://localhost:5173',
    cleartext: true
  },

  iOS: {
    scheme: 'HangroPOS'
  }
};

export default config;
```

### 6. 專案結構

```
hangro-pos/
├── src/
│   ├── components/         # 組件
│   │   ├── MenuGrid.vue
│   │   ├── CartPanel.vue
│   │   └── CheckoutModal.vue
│   ├── composables/        # 組合式函數
│   │   ├── useCart.ts
│   │   ├── usePrinter.ts
│   │   └── useIndexedDB.ts
│   ├── stores/             # Pinia 狀態管理
│   │   ├── cart.ts
│   │   └── settings.ts
│   ├── views/              # 頁面
│   │   ├── Home.vue
│   │   └── Reports.vue
│   ├── router/
│   │   └── index.ts
│   ├── db/
│   │   └── db.ts           # IndexedDB 設定
│   ├── utils/
│   │   └── printer.ts      # 列印功能
│   ├── App.vue
│   └── main.ts
├── public/
├── capacitor.config.ts
├── vite.config.ts
└── package.json
```

### 7. 初始化 IndexedDB

```typescript
// src/db/db.ts
import Dexie, { Table } from 'dexie';

export interface MenuItem {
  id?: string;
  name: string;
  categoryId: string;
  price: number;
  image: string;
  active: boolean;
}

export interface Order {
  id?: string;
  orderNumber: string;
  items: OrderItem[];
  total: number;
  paymentMethod: string;
  receivedAmount: number;
  changeAmount: number;
  createdAt: string;
  completedAt: string;
}

export interface OrderItem {
  itemId: string;
  name: string;
  quantity: number;
  price: number;
  options?: Record<string, any>;
}

class HangroDB extends Dexie {
  menuItems!: Table<MenuItem>;
  orders!: Table<Order>;
  dailyStats!: Table<any>;
  settings!: Table<any>;

  constructor() {
    super('HangroPOSDB');

    this.version(1).stores({
      menuItems: 'id, categoryId, active, price',
      orders: 'id, orderNumber, createdAt, date',
      dailyStats: 'date',
      settings: 'key'
    });
  }
}

export const db = new HangroDB();
```

### 8. 建立 Pinia Store

```typescript
// src/stores/cart.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { OrderItem } from '@/db/db';

export const useCartStore = defineStore('cart', () => {
  const items = ref<OrderItem[]>([]);

  const total = computed(() => {
    return items.value.reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);
  });

  const count = computed(() => {
    return items.value.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);
  });

  function addItem(item: OrderItem) {
    const existing = items.value.find(i => i.itemId === item.itemId);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      items.value.push({ ...item });
    }
  }

  function removeItem(itemId: string) {
    const index = items.value.findIndex(i => i.itemId === itemId);
    if (index > -1) {
      items.value.splice(index, 1);
    }
  }

  function updateQuantity(itemId: string, quantity: number) {
    const item = items.value.find(i => i.itemId === itemId);
    if (item) {
      item.quantity = quantity;
    }
  }

  function clear() {
    items.value = [];
  }

  return {
    items,
    total,
    count,
    addItem,
    removeItem,
    updateQuantity,
    clear
  };
});
```

### 9. 建立 Composable

```typescript
// src/composables/useIndexedDB.ts
import { db } from '@/db/db';
import type { MenuItem, Order } from '@/db/db';

export function useIndexedDB() {
  // 菜品管理
  const getMenuItems = async () => {
    return await db.menuItems.where('active').equals(true).toArray();
  };

  const addMenuItem = async (item: MenuItem) => {
    await db.menuItems.add(item);
  };

  // 訂單管理
  const saveOrder = async (order: Order) => {
    await db.orders.add(order);
  };

  const getTodayOrders = async () => {
    const today = new Date().toISOString().split('T')[0];
    return await db.orders
      .where('createdAt')
      .startsWith(today)
      .toArray();
  };

  return {
    getMenuItems,
    addMenuItem,
    saveOrder,
    getTodayOrders
  };
}
```

### 10. 建立列印功能

```typescript
// src/utils/printer.ts
import { Printer } from '@capacitor/printer';

export async function printReceipt(order: any) {
  const content = `
================================
  夯肉 HANGROU
================================

訂單號：${order.orderNumber}
時間：${order.createdAt}
--------------------------------

${order.items.map((item: any) => `
${item.name} x${item.quantity}
  NT$ ${item.price * item.quantity}`).join('\n')}

--------------------------------
小計：NT$ ${order.total}
付款：現金
實收：NT$ ${order.receivedAmount}
找零：NT$ ${order.changeAmount}

================================
感謝光臨！
電話：0963-261-613
================================
  `;

  try {
    await Printer.print({
      content: content,
      name: `receipt-${order.orderNumber}`
    });
  } catch (error) {
    console.error('列印失敗：', error);
  }
}

export async function printKitchenTicket(order: any) {
  const content = `
================================
  廚房單 - 夯肉 HANGROU
================================

訂單號：${order.orderNumber}
時間：${order.createdAt}
--------------------------------

${order.items.map((item: any) => `
${item.name} x${item.quantity}
${item.options ? `  備註：${Object.values(item.options).join(', ')}` : ''}`).join('\n')}

================================
  `;

  try {
    await Printer.print({
      content: content,
      name: `kitchen-${order.orderNumber}`
    });
  } catch (error) {
    console.error('列印失敗：', error);
  }
}
```

### 11. 主程式進入點

```typescript
// src/main.ts
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Vant);

app.mount('#app');
```

### 12. 開發與建構

```bash
# 開發模式（Web）
npm run dev

# 建構生產版本
npm run build

# 同步到 iOS
npx cap sync ios

# 開啟 Xcode
npx cap open ios
```

## 常用命令

```bash
# 開發
npm run dev              # 啟動開發伺服器
npm run build           # 建構生產版本

# Capacitor
npx cap sync            # 同步 web 資源到原生專案
npx cap copy            # 僅複製 web 資源
npx cap open ios        # 開啟 Xcode
npx cap open android    # 開啟 Android Studio

# iOS（在 Xcode 中）
# 1. 選擇模擬器或實機
# 2. 點擊 ▶️ 執行
# 3. Product → Archive 打包上架
```

## 注意事項

1. **首次開發需要 Mac**：打包 iOS App 需要 Mac 電腦和 Xcode
2. **Apple Developer 帳號**：上架 App Store 需要付費帳號（NT$3,500/年）
3. **測試設備**：iPad 9 或更新機型
4. **列印機測試**：建議早期測試列印機相容性

## 下一步

1. 完成 UI 設計
2. 開發核心功能（點餐、結帳、列印）
3. 整合 IndexedDB
4. 測試 Capacitor 原生功能
5. 打包並上架

## 📚 相關文件

- **[README](./README.md)** - POS 系統文件導覽
- **[POS-PLANNER.md](./POS-PLANNER.md)** - 完整開發規劃
- **[REFACTORING-SUMMARY.md](./REFACTORING-SUMMARY.md)** - 狀態管理重構總結
- **[VUE3-MIGRATION-GUIDE.md](./VUE3-MIGRATION-GUIDE.md)** - Vue 3 遷移指南

---

**文件版本**：v1.0
**建立日期**：2026-01-26
**最後更新**：2026-02-08
**適用專案**：夯肉 HANGROU iPad POS 系統
