# Prototype.html 重構狀態報告

> **建立日期**：2026-02-08
> **版本**：v1.0
> **狀態**：架構重構完成，向後兼容層已建立

**📑 文件導覽**：[README](./README.md) | [POS-PLANNER](./POS-PLANNER.md) | [VUE3-MIGRATION](./VUE3-MIGRATION-GUIDE.md)

---

## 📋 重構目標

為了準備將 `prototype.html` 轉換成 Vue 3 專案，我們進行了以下重構工作：

1. **統一狀態管理** - 將散落在全域的變數整合到 `appState` 物件
2. **建立常數定義** - 移除魔法數字，使用 `CONSTANTS` 物件
3. **建立狀態管理工具** - `StateManager` 提供統一的狀態存取介面
4. **建立工具函數** - `Utils` 提供常用的格式化和計算功能
5. **向後兼容層** - 保留原有變數引用，確保現有程式碼正常運作

---

## ✅ 已完成的工作

### 1. 統一狀態管理架構

建立了 `appState` 物件，將所有狀態分組管理：

```javascript
const appState = {
    // 設定與配置
    config: {
        menuItems,      // 選單品項資料
        categoryNames,  // 分類名稱對應
        discountTypes   // 折扣類型定義
    },

    // 購物車狀態
    cart: {
        items: [],              // 購物車品項列表
        currentCategory: 'all', // 當前選中的分類
        orderCount: 1           // 訂單編號計數器
    },

    // 規格選擇狀態
    spec: {
        currentItem: null,      // 當前選擇的品項
        qty: 1,                 // 數量
        spicy: '不辣',          // 辣度
        onion: '',              // 蔥
        garlic: '',             // 蒜
        sauce: '',              // 醬
        custom: [],             // 客製化標籤
        drinkTemp: '冰',        // 飲料溫度
        iceLevel: '正常冰',     // 冰塊等級
        sugarLevel: '全糖'      // 甜度等級
    },

    // 折扣狀態
    discount: {
        current: 0,             // 當前手動折扣金額
        reason: '',             // 折扣原因
        rules: [],              // 折扣規則列表
        editingId: null         // 正在編輯的規則 ID
    },

    // 營業日與統計
    business: {
        businessDate: '',       // 營業日期 (YYYY-MM-DD)
        dailyStats: {},         // 日統計
        weeklyStats: {},        // 週統計
        monthlyStats: {}        // 月統計
    },

    // UI 狀態
    ui: {
        pendingCartUpdateFrame: null,  // 購物車更新動畫幀
        cartNeedsUpdate: false,        // 購物車是否需要更新
        currentEditIndex: -1           // 當前編輯的品項索引
    }
};
```

### 2. 常數定義 (CONSTANTS)

將魔法數字提取到常數物件：

```javascript
const CONSTANTS = {
    TOUCH_TAP_THRESHOLD: 800,   // 觸控判斷為點擊的時間閾值 (ms)
    SCROLL_THRESHOLD: 10,       // 判斷為滾動的移動距離 (px)
    VIBRATION_DURATION: 10,     // 觸覺回饋震動時間 (ms)
    MAX_REPORT_DAYS: 7,         // 測試資料生成天數
    CATEGORY_ALL: 'all'         // 全部分類的標識
};
```

### 3. 狀態管理工具 (StateManager)

提供統一的狀態存取函數：

```javascript
const StateManager = {
    // 取得狀態的值
    get(path) {
        return path.split('.').reduce((obj, key) => obj?.[key], appState);
    },

    // 設定狀態的值
    set(path, value) {
        const keys = path.split('.');
        const lastKey = keys.pop();
        const target = keys.reduce((obj, key) => obj[key], appState);
        target[lastKey] = value;
    },

    // 更新陣列狀態
    push(path, item) {
        const array = this.get(path);
        if (Array.isArray(array)) {
            array.push(item);
        }
    },

    // 從陣列移除
    removeFrom(path, index) {
        const array = this.get(path);
        if (Array.isArray(array) && index >= 0 && index < array.length) {
            array.splice(index, 1);
        }
    }
};
```

**使用範例**：
```javascript
// 取得購物車品項
const cartItems = StateManager.get('cart.items');

// 設定當前分類
StateManager.set('cart.currentCategory', 'beef');

// 新增品項到購物車
StateManager.push('cart.items', newItem);

// 從購物車移除品項
StateManager.removeFrom('cart.items', 0);
```

### 4. 工具函數 (Utils)

提供常用的格式化和計算功能：

```javascript
const Utils = {
    // 格式化金額
    formatCurrency(amount) {
        return `$${amount.toLocaleString()}`;
    },

    // 格式化日期
    formatDate(date) {
        return date.replace(/-/g, '');
    },

    // 生成訂單編號
    generateOrderNumber(businessDate, orderCount) {
        const dateStr = businessDate.replace(/-/g, '');
        return `#${dateStr}${String(orderCount).padStart(3, '0')}`;
    },

    // 計算購物車總金額
    getCartTotal(cart) {
        return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },

    // 計算購物車總數量
    getCartTotalCount(cart) {
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    }
};
```

**使用範例**：
```javascript
// 格式化金額
const formattedPrice = Utils.formatCurrency(1500);  // "$1,500"

// 生成訂單編號
const orderNumber = Utils.generateOrderNumber('2026-02-08', 1);  // "#20260208001"

// 計算總金額
const total = Utils.getCartTotal(cart);
```

### 5. 向後兼容層

為了讓現有程式碼正常運作，我們保留了原有的變數名稱，並讓它們指向 `appState`：

```javascript
// 向後兼容的變數引用（指向 appState）
let cart = appState.cart.items;
let currentCategory = appState.cart.currentCategory;
let orderCount = appState.cart.orderCount;
let currentItem = appState.spec.currentItem;
let currentSpecQty = appState.spec.qty;
let currentSpecSpicy = appState.spec.spicy;
// ... 其他變數
```

**⚠️ 重要限制**：
- 這些變數是對 `appState` 中物件/陣列的**引用**
- 對於陣列/物件的**變異操作**（如 `push`, `splice`）會正確更新 `appState`
- 但如果是**重新賦值**（如 `cart = []`），則只會更新本地變數，不會影響 `appState`

---

## 🚧 已知的限制與待辦事項

### 1. 向後兼容層的限制

**問題**：目前的向後兼容層使用簡單的變數引用，當程式碼重新賦值時不會同步到 `appState`。

**影響範圍**：以下情況會有問題
```javascript
// ❌ 錯誤：重新賦值不會同步到 appState
cart = [];

// ✅ 正確：清空陣列會同步到 appState
cart.length = 0;
```

**解決方案**（未來 Vue 3 轉換時）：
- 完全移除向後兼容層
- 所有程式碼直接使用 `StateManager` 或 Pinia Store

### 2. 需要逐步更新的程式碼模式

在轉換成 Vue 3 之前，需要逐步更新以下模式：

#### 模式 1：直接存取全域變數 → 使用 StateManager
```javascript
// ❌ 舊寫法
cart.push(item);

// ✅ 新寫法（轉換後）
StateManager.push('cart.items', item);

// 🎯 Vue 3 寫法
cartStore.addItem(item);
```

#### 模式 2：DOM 操作 → Vue Template
```javascript
// ❌ 舊寫法
document.getElementById('cartTotal').textContent = `$${total}`;

// ✅ Vue 3 寫法
<template>{{ formattedTotal }}</template>
```

#### 模式 3：事件監聽器 → Vue 事件
```javascript
// ❌ 舊寫法
menuItem.addEventListener('touchstart', handleTouch);

// ✅ Vue 3 寫法
<div @touchstart="handleTouch">
```

---

## 📊 程式碼品質改善

### 已改善的問題

1. **✅ 移除重複的變數宣告**
   - 問題：`weeklyStats`, `monthlyStats`, `discountRules` 等變數重複宣告
   - 解決：統一在 `appState` 中定義，移除重複宣告

2. **✅ 移除魔法數字**
   - 問題：程式碼中散落 `800`, `10`, `7` 等數字
   - 解決：提取到 `CONSTANTS` 物件

3. **✅ 建立狀態管理架構**
   - 問題：20+ 個全域變數難以管理
   - 解決：整合到 `appState` 物件，分類管理

4. **✅ 建立工具函數**
   - 問題：重複的格式化、計算邏輯散落各處
   - 解決：提取到 `Utils` 物件

### 仍需改善的問題（建議在 Vue 3 轉換時處理）

1. **❌ 缺乏錯誤處理**
   ```javascript
   // ❌ 目前
   localStorage.setItem(key, value);

   // ✅ 應該
   try {
       localStorage.setItem(key, value);
   } catch (error) {
       console.error('儲存失敗:', error);
   }
   ```

2. **❌ 缺乏輸入驗證**
   ```javascript
   // ❌ 目前
   function addToCart(item) {
       cart.push(item);
   }

   // ✅ 應該
   function addToCart(item) {
       if (!item || !item.id || !item.price) {
           console.error('無效的品項:', item);
           return;
       }
       StateManager.push('cart.items', item);
   }
   ```

3. **❌ 直接 DOM 操作過多**
   - 問題：大量使用 `getElementById`, `innerHTML`
   - 解決方案：轉換成 Vue 3 後使用聲明式模板

---

## 🎯 下一步行動

### 短期（準備 Vue 3 轉換）

1. **閱讀 Vue 3 遷移指南**
   - 詳細指南：`pos/docs/VUE3-MIGRATION-GUIDE.md`
   - 包含完整的程式碼對照範例

2. **測試重構後的原型**
   ```bash
   # 開啟原型測試
   open /Users/laikaiyue/Documents/Project/hangrou/pos/prototype.html
   ```

3. **驗證功能正常**
   - 點餐功能
   - 規格選擇
   - 結帳流程
   - 銷售報表

### 中期（Vue 3 專案建置）

1. **建立 Vue 3 專案**
   ```bash
   cd pos
   npm create vite@latest . -- --template vue-ts
   npm install
   ```

2. **安裝依賴套件**
   ```bash
   npm install pinia vant
   ```

3. **建立 Pinia Stores**
   - `src/stores/cart.ts` - 購物車狀態
   - `src/stores/discount.ts` - 折扣狀態
   - `src/stores/business.ts` - 營業統計
   - `src/stores/spec.ts` - 規格選擇

### 長期（功能擴展）

1. **IndexedDB 資料庫整合**
2. **列印機整合（ESC/POS）**
3. **PWA 漸進式 Web App**
4. **Capacitor 打包為 iOS App**

---

## 📚 相關文件

- **Vue 3 遷移指南**：`pos/docs/VUE3-MIGRATION-GUIDE.md`
- **開發規劃**：`pos/docs/POS-PLANNER.md`
- **專案指南**：`CLAUDE.md`

---

## 🔍 快速參考

### appState 結構速查表

```javascript
appState = {
    config: {
        menuItems,      // 選單品項陣列
        categoryNames,  // 分類名稱物件
        discountTypes   // 折扣類型定義
    },
    cart: {
        items: [],              // 購物車陣列
        currentCategory: 'all', // 當前分類
        orderCount: 1           // 訂單計數
    },
    spec: {
        currentItem, qty, spicy, onion, garlic, sauce,
        custom, drinkTemp, iceLevel, sugarLevel
    },
    discount: {
        current, reason, rules, editingId
    },
    business: {
        businessDate, dailyStats, weeklyStats, monthlyStats
    },
    ui: {
        pendingCartUpdateFrame, cartNeedsUpdate, currentEditIndex
    }
}
```

### StateManager 速查表

```javascript
// 取得值
StateManager.get('cart.items')

// 設定值
StateManager.set('cart.currentCategory', 'beef')

// 新增到陣列
StateManager.push('cart.items', item)

// 從陣列移除
StateManager.removeFrom('cart.items', index)
```

### Utils 速查表

```javascript
Utils.formatCurrency(1500)           // "$1,500"
Utils.formatDate('2026-02-08')       // "20260208"
Utils.generateOrderNumber('2026-02-08', 1)  // "#20260208001"
Utils.getCartTotal(cart)             // 計算總金額
Utils.getCartTotalCount(cart)        // 計算總數量
```

---

## 📚 相關文件

- **[README](./README.md)** - POS 系統文件導覽
- **[POS-PLANNER.md](./POS-PLANNER.md)** - 完整開發規劃
- **[VUE3-MIGRATION-GUIDE.md](./VUE3-MIGRATION-GUIDE.md)** - Vue 3 遷移指南
- **[VUE3-QUICKSTART.md](./VUE3-QUICKSTART.md)** - Vue 3 快速開始

---

**文件版本**：v1.0
**建立日期**：2026-02-08
**最後更新**：2026-02-08
**維護者**：Claude Code Assistant
