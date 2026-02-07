# Vue 3 遷移指南

> **目的**：將 `prototype.html` 轉換成 Vue 3 專案
>
> **📑 文件導覽**：[README](./README.md) | [POS-PLANNER](./POS-PLANNER.md) | [REFACTORING](./REFACTORING-SUMMARY.md)

## 📋 當前狀態

> **重構狀態**：✅ 架構重構完成（詳見 [REFACTORING-SUMMARY.md](./REFACTORING-SUMMARY.md)）

### ✅ 已完成的重構
1. **建立統一的 appState 物件** - 整合所有全域變數
2. **建立 CONSTANTS 常數** - 移除魔法數字
3. **建立 StateManager 工具** - 統一的狀態存取函數
4. **建立 Utils 工具** - 常用的工具函數
5. **向後兼容層** - 保留原有變數引用，確保現有程式碼正常運作
6. **移除重複變數宣告** - 修復 `weeklyStats`, `monthlyStats`, `discountRules` 等重複宣告問題

### 🎯 當前架構
```javascript
// 狀態管理
const appState = {
    config: { menuItems, categoryNames, discountTypes },
    cart: { items, currentCategory, orderCount },
    spec: { currentItem, qty, spicy, onion, garlic, sauce, ... },
    discount: { current, reason, rules, editingId },
    business: { businessDate, dailyStats, weeklyStats, monthlyStats },
    ui: { pendingCartUpdateFrame, cartNeedsUpdate, currentEditIndex }
};

// 向後兼容
let cart = appState.cart.items;
let currentCategory = appState.cart.currentCategory;
// ... 等等
```

---

## 🚀 Vue 3 轉換步驟

### Phase 1：建立 Vue 3 專案

```bash
cd pos
npm create vite@latest . -- --template vue-ts
npm install
```

### Phase 2：狀態管理轉換

#### 原型（當前）
```javascript
// appState 物件
const appState = {
    cart: {
        items: [],
        currentCategory: 'all',
        orderCount: 1
    },
    // ...
};

// 直接修改
cart.push(item);
currentCategory = 'beef';
```

#### Vue 3 使用 Pinia
```typescript
// src/stores/cart.ts
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as CartItem[],
        currentCategory: 'all' as string,
        orderCount: 1
    }),
    getters: {
        totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: (state) => state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    },
    actions: {
        addItem(item: CartItem) {
            // 檢查是否已有相同規格的品項
            const existingIndex = state.items.findIndex(i =>
                i.id === item.id &&
                i.spicy === item.spicy &&
                i.onion === item.onion &&
                i.garlic === item.garlic &&
                i.sauce === item.sauce &&
                i.custom === item.custom
            );

            if (existingIndex >= 0) {
                state.items[existingIndex].quantity += item.quantity;
            } else {
                state.items.push(item);
            }
        },
        removeItem(index: number) {
            state.items.splice(index, 1);
        },
        setCategory(category: string) {
            state.currentCategory = category;
        }
    }
});
```

### Phase 3：元件化拆分

#### 原型的 HTML 結構
```
prototype.html
├── 主畫面
│   ├── 分類標籤
│   ├── 選單網格
│   └── 購物車側欄
├── 結帳彈窗
├── 規格選擇彈窗
└── 報表頁面
```

#### Vue 3 元件結構
```
src/
├── components/
│   ├── MainMenu.vue        # 主選單（含分類標籤）
│   ├── MenuGrid.vue         # 選單網格
│   ├── CartSidebar.vue      # 購物車側欄
│   ├── CheckoutModal.vue    # 結帳彈窗
│   ├── SpecModal.vue        # 規格選擇彈窗
│   └── ReportPage.vue       # 報表頁面
├── stores/
│   ├── cart.ts              # 購物車狀態
│   ├── discount.ts          # 折扣規則狀態
│   ├── business.ts          # 營業日與統計
│   └── spec.ts              # 規格選擇狀態
├── composables/
│   ├── useCart.ts           # 購物車邏輯
│   ├── useCheckout.ts       # 結帳邏輯
│   └── useSpec.ts           # 規格選擇邏輯
└── utils/
│   ├── formatters.ts        # 格式化函數
│   ├── validators.ts        # 驗證函數
│   └── constants.ts         # 常數定義
```

### Phase 4：函式轉換對照

#### 原型函數 → Vue 3 Composition API

| 原型函數 | Vue 3 寫法 |
|---------|-----------|
| `addToCart(item)` | `cartStore.addItem(item)` |
| `updateCart()` | 自動響應式（無需手動更新） |
| `renderCart()` | `<CartSidebar />` 元件自動處理 |
| `calculateDiscounts()` | `discountStore.calculateDiscounts()` |
| `completePayment()` | `checkoutStore.completePayment()` |

#### DOM 操作 → Vue Template

**原型（直接操作 DOM）**：
```javascript
function renderCart() {
    const container = document.getElementById('cartItems');
    container.innerHTML = cart.map(item => `
        <div class="cart-item">${item.name}</div>
    `).join('');
}
```

**Vue 3（聲明式渲染）**：
```vue
<template>
    <div class="cart-item" v-for="item in cartItems" :key="item.id">
        {{ item.name }}
    </div>
</template>
```

#### 事件處理轉換

**原型（事件監聽器）**：
```javascript
menuItem.addEventListener('touchstart', (e) => {
    addToCart(item);
}, { passive: true });
```

**Vue 3（模板事件）**：
```vue
<template>
    <div
        class="menu-item"
        @touchstart.prevent="handleAddToCart(item)"
    >
        {{ item.name }}
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();

function handleAddToCart(item: MenuItem) {
    cartStore.addItem(item);
}
</script>
```

---

## 📝 詳細轉換範例

### 範例 1：購物車功能

#### 原型程式碼
```javascript
// 購物車資料
let cart = [];

function addToCart(item) {
    const defaultCustom = item.category === 'drink' ? '正常冰' : '';
    const defaultSpicy = item.category === 'drink' ? '' : '不辣';

    const cartItem = {
        ...item,
        quantity: 1,
        spicy: defaultSpicy,
        custom: defaultCustom
    };

    // 檢查相同規格
    const existingIndex = cart.findIndex(i =>
        i.id === cartItem.id &&
        i.spicy === cartItem.spicy &&
        i.custom === cartItem.custom
    );

    if (existingIndex >= 0) {
        cart[existingIndex].quantity += cartItem.quantity;
    } else {
        cart.push(cartItem);
    }

    updateCart();
}

function updateCart() {
    cartNeedsUpdate = true;
    // ... 渲染邏輯
}
```

#### Vue 3 實作
```typescript
// src/stores/cart.ts
import { defineStore } from 'pinia';

interface CartItem {
    id: number;
    name: string;
    category: string;
    price: number;
    quantity: number;
    spicy?: string;
    onion?: string;
    garlic?: string;
    sauce?: string;
    custom?: string;
}

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as CartItem[],
        currentCategory: 'all' as string,
        orderCount: 1
    }),

    getters: {
        totalItems: (state) => {
            return state.items.reduce((sum, item) => sum + item.quantity, 0);
        },
        totalPrice: (state) => {
            return state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        }
    },

    actions: {
        addItem(item: CartItem) {
            // 設定預設規格
            const cartItem: CartItem = {
                ...item,
                quantity: 1,
                spicy: item.category === 'drink' ? '' : '不辣',
                custom: item.category === 'drink' ? '正常冰' : ''
            };

            // 檢查相同規格
            const existingIndex = this.items.findIndex(i =>
                i.id === cartItem.id &&
                i.spicy === cartItem.spicy &&
                i.custom === cartItem.custom
            );

            if (existingIndex >= 0) {
                this.items[existingIndex].quantity += cartItem.quantity;
            } else {
                this.items.push(cartItem);
            }
        },

        removeItem(index: number) {
            this.items.splice(index, 1);
        },

        updateQuantity(index: number, delta: number) {
            const item = this.items[index];
            if (item) {
                item.quantity += delta;
                if (item.quantity <= 0) {
                    this.removeItem(index);
                }
            }
        },

        clearCart() {
            this.items = [];
            this.orderCount = 1;
        }
    }
});
```

### 範例 2：結帳功能

#### 原型程式碼
```javascript
function showCheckout() {
    if (cart.length === 0) {
        alert('請先點選商品');
        return;
    }

    const modal = document.getElementById('checkoutModal');
    const checkoutItems = document.getElementById('checkoutItems');

    // 渲染訂單項目
    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${item.name}</span>
            <span>x${item.quantity}</span>
            <span>$${item.price * item.quantity}</span>
        </div>
    `).join('');

    // 計算折扣
    const { totalDiscount } = calculateDiscounts();
    const subtotal = calculateSubtotal();
    const total = subtotal - totalDiscount - currentManualDiscount;

    // 更新總計
    document.getElementById('checkoutTotal').textContent = `$${total}`;

    modal.classList.add('active');
}
```

#### Vue 3 實作
```vue
<!-- src/components/CheckoutModal.vue -->
<template>
    <div class="modal-overlay" v-if="visible" @click.self="close">
        <div class="modal">
            <div class="modal-header">
                <div class="modal-title">結帳付款</div>
                <button class="modal-close" @click="close">×</button>
            </div>
            <div class="modal-body">
                <div class="checkout-items">
                    <div
                        v-for="(item, index) in cartItems"
                        :key="index"
                        class="checkout-item"
                    >
                        <span>{{ item.name }}</span>
                        <span>x{{ item.quantity }}</span>
                        <span>${{ item.price * item.quantity }}</span>
                    </div>
                </div>

                <!-- 總計 -->
                <div class="checkout-total">
                    <span>總計：${{ formattedTotal }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCartStore } from '@/stores/cart';
import { useDiscountStore } from '@/stores/discount';

const cartStore = useCartStore();
const discountStore = useDiscountStore();

const visible = ref(false);

const cartItems = computed(() => cartStore.items);
const subtotal = computed(() => cartStore.totalPrice);
const totalDiscount = computed(() => discountStore.totalDiscount);
const manualDiscount = computed(() => discountStore.manualDiscount);

const total = computed(() =>
    subtotal.value - totalDiscount.value - manualDiscount.value
);

const formattedTotal = computed(() => `$${total.value.toLocaleString()}`);

function open() {
    if (cartItems.value.length === 0) {
        alert('請先點選商品');
        return;
    }
    visible.value = true;
}

function close() {
    visible.value = false;
}

defineExpose({ open, close });
</script>
```

---

## 🔑 關鍵差異對照

### 1. 狀態管理

| 原型 | Vue 3 + Pinia |
|------|--------------|
| `appState` 物件 | Pinia Store |
| 直接修改狀態 | 透過 actions 修改 |
| 手動更新 UI | 自動響應式更新 |

### 2. 模板渲染

| 原型 | Vue 3 |
|------|-------|
| `innerHTML` 插入 HTML | Template 語法 |
| 字串拼接 | `v-for`、`v-if` |
| 手動更新 DOM | Virtual DOM 自動 diff |

### 3. 事件處理

| 原型 | Vue 3 |
|------|-------|
| `addEventListener` | `@click`、`@touchstart` |
| `onclick` | `v-on:click` |
| 事件監聽器 | 模板事件 |

### 4. 生命週期

| 原型 | Vue 3 |
|------|-------|
| 頁面載入時初始化 | `onMounted()` |
| 手動呼叫函式 | 自動響應式 |
| DOMContentLoaded | `onMounted()` |

---

## 🎯 轉換優先順序

### 第一優先：核心功能（必須）
1. ✅ 購物車功能（CartStore）
2. ✅ 結帳功能（CheckoutStore）
3. ✅ 選單展示（MainMenu 元件）
4. ✅ 規格選擇（SpecModal 元件）

### 第二優先：狀態管理（必須）
1. ✅ 折扣系統（DiscountStore）
2. ✅ 營業統計（BusinessStore）
3. ✅ 規格選擇（SpecStore）

### 第三優先：報表與統計（重要）
1. ⏳ 銷售報表（ReportPage 元件）
2. ⏳ 歷史查詢（DateSelector 元件）

### 第四優先：進階功能（可選）
1. ⏳ 測試資料生成
2. ⏳ 匯出功能
3. ⏳ 設定管理

---

## 💡 最佳實踐

### 1. 使用 TypeScript
- ✅ 強型檢查，減少錯誤
- ✅ IDE 自動完成更好
- ✅ 重構更安全

### 2. 使用 Composition API
- ✅ 邏輯組織更清晰
- ✅ 程式碼復用性更高
- ✅ 更容易測試

### 3. 組件化
- ✅ 單一職責原則
- ✅ Props Down, Events Up
- ✅ 避免巨型元件

### 4. 狀態管理
- ✅ 使用 Pinia 統一管理
- ✅ 避免 prop drilling
- ✅ 持久化整合

---

## 📚 參考資源

### 內部文件
- **[README](./README.md)** - POS 系統文件導覽
- **[POS-PLANNER.md](./POS-PLANNER.md)** - 完整開發規劃
- **[REFACTORING-SUMMARY.md](./REFACTORING-SUMMARY.md)** - 狀態管理重構總結
- **[VUE3-QUICKSTART.md](./VUE3-QUICKSTART.md)** - Vue 3 快速開始

### 外部資源
- [Vue 3 官方文件](https://vuejs.org/)
- [Pinia 狀態管理](https://pinia.vuejs.org/)
- [Vant 4 UI 組件庫](https://vant-ui.github.io/vant/#/en-US)
- [Vue 3 + TypeScript 範例](https://github.com/vuejs/core)

---

**文件版本**：v1.0
**建立日期**：2026-02-08
**最後更新**：2026-02-08
**維護者**：Claude Code Assistant
