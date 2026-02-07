# POS 系統文件導覽

> **夯肉 HANGROU iPad POS 點餐系統** - 技術文件總覽
>
> **最後更新**：2026-02-08
> **專案狀態**：原型重構完成，準備 Vue 3 轉換

---

## 📚 文件地圖

```
pos/docs/
├── README.md                   # 本文件 - 文件導覽
├── POS-PLANNER.md              # 📋 完整開發規劃
├── REFACTORING-SUMMARY.md      # 🔧 狀態管理重構總結
├── VUE3-MIGRATION-GUIDE.md     # 🚀 Vue 3 遷移指南
├── VUE3-QUICKSTART.md          # ⚡ Vue 3 快速開始
└── DOCS-STRUCTURE.md           # 📊 文件結構說明
```

---

## 🎯 快速導航

### 想了解專案規劃？
👉 **[POS-PLANNER.md](./POS-PLANNER.md)**
- 完整的功能需求分析
- 技術堆疊選擇
- Phase 1-4 發展規劃
- 資料庫結構設計
- 開發進度追蹤
- 更新記錄

### 想了解重構內容？
👉 **[REFACTORING-SUMMARY.md](./REFACTORING-SUMMARY.md)**
- 為什麼需要重構
- appState 狀態管理架構
- StateManager 使用指南
- Utils 工具函數說明
- 向後兼容層實作
- 已知限制與待辦事項
- 速查表（appState、StateManager、Utils）

### 準備轉換成 Vue 3？
👉 **[VUE3-MIGRATION-GUIDE.md](./VUE3-MIGRATION-GUIDE.md)**
- Vue 3 轉換步驟
- 原型程式碼 → Vue 3 對照
- Pinia Store 架構設計
- 元件化拆分策略
- 詳細轉換範例
- 最佳實踐建議

### 準備開始 Vue 3 開發？
👉 **[VUE3-QUICKSTART.md](./VUE3-QUICKSTART.md)**
- Vue 3 專案初始化
- Vite 配置說明
- TypeScript 設定
- Vant 4 整合
- 開發流程指引

### 想了解文件組織結構？
👉 **[DOCS-STRUCTURE.md](./DOCS-STRUCTURE.md)**
- 文件組織結構圖
- 文件關係圖
- 閱讀路徑建議
- 文件維護規範

---

## 📖 閱讀順序建議

### 路線 1：新加入開發者
```
1. POS-PLANNER.md           → 了解專案全貌
2. REFACTORING-SUMMARY.md    → 理解當前架構
3. VUE3-MIGRATION-GUIDE.md   → 準備轉換
4. VUE3-QUICKSTART.md        → 開始開發
```

### 路線 2：只想了解重構
```
1. REFACTORING-SUMMARY.md    → 重構內容總覽
2. VUE3-MIGRATION-GUIDE.md   → 如何轉換（選讀）
```

### 路線 3：準備開始 Vue 3 開發
```
1. REFACTORING-SUMMARY.md    → 理解現有架構
2. VUE3-MIGRATION-GUIDE.md   → 轉換對照表
3. VUE3-QUICKSTART.md        → 建立專案
```

---

## 🔑 核心概念速覽

### 當前架構（Prototype）

```javascript
// 統一的狀態管理
const appState = {
    config: { menuItems, categoryNames, discountTypes },
    cart: { items, currentCategory, orderCount },
    spec: { currentItem, qty, spicy, onion, garlic, sauce, ... },
    discount: { current, reason, rules, editingId },
    business: { businessDate, dailyStats, weeklyStats, monthlyStats },
    ui: { pendingCartUpdateFrame, cartNeedsUpdate, currentEditIndex }
};

// 狀態存取 API
StateManager.get('cart.items');
StateManager.set('cart.currentCategory', 'beef');
StateManager.push('cart.items', newItem);

// 工具函數
Utils.formatCurrency(1500);
Utils.generateOrderNumber('2026-02-08', 1);
```

### Vue 3 目標架構

```typescript
// Pinia Stores
useCartStore()      // 購物車狀態
useSpecStore()      // 規格選擇狀態
useDiscountStore()  // 折扣狀態
useBusinessStore()  // 營業統計狀態

// Vue 元件
MainMenu.vue        // 主選單
CartSidebar.vue     // 購物車側欄
CheckoutModal.vue   // 結帳彈窗
SpecModal.vue       // 規格選擇彈窗
ReportPage.vue      // 報表頁面
```

---

## 📊 當前進度

### ✅ 已完成
- [x] 可操作原型（HTML/CSS/JavaScript）
- [x] 點餐、結帳、規格選擇功能
- [x] 銷售統計、歷史查詢、每日結帳條
- [x] 觸控優化、介面優化
- [x] 狀態管理架構重構
- [x] Vue 3 轉換準備工作

### ⏳ 進行中
- [ ] Vue 3 專案建置
- [ ] 元件化拆分
- [ ] Pinia Store 實作

### 📋 待開發
- [ ] IndexedDB 資料庫整合
- [ ] 列印機整合（ESC/POS）
- [ ] 測試與優化

---

## 🔗 相關資源

### 專案文件
- [專案總覽](../../CLAUDE.md) - 專案整體說明
- [原型檔案](../prototype.html) - 可操作原型

### 外部資源
- [Vue 3 官方文件](https://vuejs.org/)
- [Pinia 狀態管理](https://pinia.vuejs.org/)
- [Vant 4 UI 組件庫](https://vant-ui.github.io/vant/#/en-US)
- [Vite 建構工具](https://vitejs.dev/)
- [TypeScript 文件](https://www.typescriptlang.org/)

---

## 📝 文件維護

### 文件版本對照

| 文件 | 版本 | 最後更新 | 狀態 |
|------|------|----------|------|
| POS-PLANNER.md | v5.1 | 2026-02-08 | ✅ 最新 |
| REFACTORING-SUMMARY.md | v1.0 | 2026-02-08 | ✅ 最新 |
| VUE3-MIGRATION-GUIDE.md | v1.0 | 2026-02-08 | ✅ 最新 |
| VUE3-QUICKSTART.md | v1.0 | 2026-02-08 | ✅ 最新 |

### 更新原則
- 每次重大更新後更新版本號
- 在文件末尾記錄更新日期
- 同步更新相關文件的交叉連結
- 保持文件間的一致性

---

## 💡 常見問題

**Q: 為什麼���要重構？**
A: 原型使用 20+ 個全域變數，難以維護。重構成統一的 appState 架構後，更容易轉換成 Vue 3 的 Pinia Store。

**Q: 向後兼容層是什麼？**
A: 為了讓現有程式碼正常運作，我們保留了原有的變數名稱，並讓它們指向 appState。

**Q: 什麼時候開始 Vue 3 轉換？**
A: 隨時可以開始！重構已完成，架構已對照 Pinia Store 設計。

**Q: 需要先學會 Vue 3 嗎？**
A: 建議先閱讀 [VUE3-MIGRATION-GUIDE.md](./VUE3-MIGRATION-GUIDE.md) 了解對照關係，再參考官方文件。

---

## 🤝 貢獻指南

### 如何更新文件
1. 確定更新的文件類型（規劃/遷移/重構）
2. 更新版本號和日期
3. 同步更新相關連結
4. 更新本 README 的進度追蹤
5. 提交變更並說明更新內容

### 文件撰寫建議
- ✅ 使用繁體中文
- ✅ 提供程式碼範例
- ✅ 包含快速參考表
- ✅ 保持文件間的一致性
- ✅ 定期更新進度

---

**文件維護者**：Claude Code Assistant
**專案網址**：https://hangrou.com.tw
**問題回報**：聯繫專案負責人
