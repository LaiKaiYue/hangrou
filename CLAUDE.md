# CLAUDE.md - 夯肉 HANGROU 專案指南

## 專案概述

**專案名稱**：夯肉 HANGROU
**專案類型**：多專案儲存庫（Monorepo）
- 🌐 靜態行銷網站（已完成，營運中）
- 📱 iPad POS 點餐系統（原型開發中）

**重要規範**：
- ✅ **所有檔案、註解、變數命名必須使用繁體中文**
- ✅ **使用者介面文字必須使用繁體中文（台灣）**
- ✅ **文件說明必須使用繁體中文**
- ✅ **程式碼註解必須使用繁體中文**

## 業務資訊

### 基本資訊
- **品牌名稱**：夯肉 HANGROU
- **營業地點**：台中市北屯區致富路／致富一街（北屯攤夜市）
- **營業時間**：週一、三、五、六、日 17:00～23:00（週二、四休息）
- **聯絡電話**：0963-261-613
- **服務範圍**：夜市攤位服務

### 核心特色
- 日式炭火燒烤，使用優質炭火
- 菜品價格：NT$35 起，主打平價實在
- 北屯夜市知名攤位，當地人氣美食
- 提供電話訂餐服務

## 專案結構

```
hangrou/
├── 📱 pos/                          # iPad POS 點餐系統
│   ├── docs/                        # POS 專案文件
│   │   ├── POS-PLANNER.md           # 開發規劃
│   │   └── VUE3-QUICKSTART.md        # Vue 3 快速開始
│   ├── prototype.html               # 可操作原型（已完成）
│   ├── src/                         # POS 原始碼（待建立）
│   └── package.json                 # NPM 設定（待建立）
│
├── 🌐 website/                     # 靜態行銷網站
│   ├── index.html                  # 主頁面
│   ├── css/                        # 樣式檔案
│   │   └── style.css
│   ├── js/                         # JavaScript
│   │   └── main.js
│   ├── images/                     # 圖片資源
│   │   ├── about/
│   │   ├── hero/
│   │   ├── menu/
│   │   └── activity/
│   ├── .htaccess                   # Apache 設定
│   ├── robots.txt                  # 搜尋引擎爬蟲規則
│   ├── sitemap.xml                 # 網站地圖
│   ├── deploy.sh                   # 部署腳本
│   └── README.md                   # 網站說明
│
├── 📚 docs/                        # 共用文件
│   ├── DEPLOYMENT-GUIDE.md         # 部署指南
│   ├── SEO-CHECKLIST.md            # SEO 檢查清單
│   ├── IMAGES-GUIDE.md             # 圖片使用指南
│   ├── BBQKING-STYLE-GUIDE.md      # 設計風格指南
│   └── GITHUB-PAGES-DEPLOYMENT.md  # GitHub Pages 部署
│
├── .git/                           # Git 版本控制
├── .gitignore
├── CLAUDE.md                       # AI 助手專案指南（本檔案）
└── README.md                       # 專案總覽
```

## 子系統說明

### 🌐 靜態行銷網站（website/）

**技術堆疊**：純 HTML/CSS/JavaScript
**部署平台**：GitHub Pages、Cloudflare Pages 等靜態託管
**狀態**：✅ 已完成，營運中
**網址**：https://hangrou.com.tw

**功能特色**：
- 響應式設計（手機/平板/桌機）
- 暗黑模式切換
- Hero 輪播圖（5秒自動切換）
- 精選菜單分類展示
- SEO 優化（完整 Meta、Open Graph、JSON-LD）

詳細說明請參考：[website/README.md](website/README.md)

### 📱 iPad POS 點餐系統（pos/）

**技術堆疊**：Vue 3 + TypeScript + Vant 4
**平台**：iPad 9 (Safari 瀏覽器)
**資料庫**：IndexedDB（本地）
**列印**：ESC/POS 協定（網路列印機）
**狀態**：🎨 原型開發中（可操作原型已完成）

**當前進度**：
- ✅ 可操作原型（`pos/prototype.html`）
- ✅ 點餐系統（網格化選單、即時購物車）
- ✅ 結帳系統（現金付款、找零計算、手動折扣）
- ✅ 規格選擇（辣度、客製化備註）
- ✅ 銷售統計（日/週/月報表、歷史查詢、即時統計）
- ✅ 每日結帳條（營業統計、銷售明細、匯出）
- ✅ 觸控優化（零延遲響應、防止縮放）
- ⏳ Vue 3 專案建置（待開發）
- ⏳ IndexedDB 資料庫整合（待開發）
- ⏳ 列印機整合（待開發）

**原型功能**：
- 📍 主畫面：分類切換、選單展示、購物車管理
- 🎯 規格選擇：
  - 辣度選擇：不辣、微辣、中辣、特辣
  - 客製化備註：少冰、去冰、加蔥、去蔥等
  - 自訂備註輸入
  - 數量調整
- 💳 結帳流程：
  - 訂單確認（含規格資訊）
  - 手動折扣區塊：
    - 快速折扣：折$10、折$20、折$50
    - 自訂金額輸入
    - 百分比折扣：打9折、打8折
    - 折扣原因選擇
  - 總計顯示（包含手動折扣）
  - 現金付款（輸入驗證：僅允許數字）
  - 快速金額按鈕：
    - 累加模式：$100, $500, $1000 可累加
    - 收全額：一鍵填入應收總額（含手動折扣）
    - 歸零：清除輸入金額
  - 找零計算（含手動折扣）
  - 訂單編號格式：`#20260126001`（無 '-' 符號）
- 🏷️ 折扣優惠：
  - 單一品項折扣（例如：買3串烤香菇折$5）
  - 分類折扣（例如：買3串任何雞肉品項折$5）
  - 總數量折扣（例如：購物車滿5串任何品項折$20）
  - 手動折扣（快速金額、自訂、百分比）
  - 支援多個折扣規則同時套用
- 📱 觸控��化：
  - **零延遲觸控響應**：使用 touchstart 事件替代 click，消除瀏覽器 300ms 延遲
  - **移除過渡動畫**：所有按鈕移除 transition，提升反應速度
  - **觸覺回饋**：支援震動回饋（Vibration API，10ms 輕微震動）
  - **視覺回饋**：即時按下效果（.pressed 類）
  - **防止干擾**：禁止雙指縮放、雙擊放大、長按選單
  - **輸入框優化**：輸入框仍可正常選取文字
  - **優化的按鈕**：
    - ✅ 菜單項目：連續點擊即時加入購物車
    - ✅ 數量增減：連續點擊無延遲
    - ✅ 快速金額：連續點擊不同金額無卡頓
    - ✅ 刪除按鈕：即時響應
- ⚙️ 設定管理：新增/編輯/刪除折扣規則
- 📊 銷售報表：
  - 原價營業額統計（未折扣）
  - 今日總折扣金額
  - 今日利潤（原價 - 折扣）
  - 熱銷商品 TOP 10（顯示排名、品項、數量、營業額）
  - **折扣明細**：顯示每個折扣規則的使用次數和總折扣金額
  - 分類統計、時段分析
  - **歷史查詢**：
    - 日報表：日期選擇器、今日/昨日快速切換
    - 週報表：週選擇器、本週/上週快速切換
    - 月報表：月份選擇器、本月/上月快速切換
  - **每日結帳條**：
    - 完整銷售明細列表
    - **匯出結帳明細**（支援日期區間查詢匯出）
      - 自動讀取日期選擇器
      - 合併多天統計資料
      - 依日期和訂單號排序
      - 智能檔名（單日/區間）
      - 區間查詢��保留匯出按鈕
    - 營業日關帳功能
- 🧪 測試資料：
  - 生成過去7天測試資料
  - 自動載入報表查詢
  - 清除測試資料

**快速測試原型**：
```bash
# 方法 1：直接用瀏覽器打開
open /Users/laikaiyue/Documents/Project/hangrou/pos/prototype.html

# 方法 2：使用本地伺服器
cd /Users/laikaiyue/Documents/Project/hangrou/pos
python -m http.server 8000
# 訪問 http://localhost:8000/prototype.html
```

詳細說明請參考：
- [pos/docs/POS-PLANNER.md](pos/docs/POS-PLANNER.md) - 完整開發規劃
- [pos/docs/VUE3-QUICKSTART.md](pos/docs/VUE3-QUICKSTART.md) - Vue 3 快速開始

## 網站設計系統

### 配色方案
```css
/* 亮色模式（預設） */
--primary-color: #FF6B35;     /* 活力橙紅 */
--secondary-color: #FF8C42;   /* 溫暖橙色 */
--accent-color: #2D3436;      /* 深灰 */
--bg-color: #FFFFFF;          /* 純白 */
--text-dark: #2D3436;         /* 深灰黑 */
--gray-light: #F8F9FA;        /* 淺灰背景 */

/* 暗黑模式 */
--bg-color: #1A1A1A;          /* 深黑 */
--card-bg: #252525;           /* 卡片背景 */
--text-dark: #DFE6E9;         /* 淺色文字 */
```

### 設計特點
- 現代暖色調風格
- 圓角卡片設計（12px border-radius）
- 平滑過渡動畫（0.3s ease）
- 支援亮色/暗黑模式切換
- 響應式佈局（桌面/平板/手機）

### 響應式斷點
- **桌面版**：> 968px
- **平板版**：768px - 968px
- **手機版**：< 768px

## 網站核心功能

### 1. 導航列
- 固定頂部導航（position: fixed）
- 暗黑模式切換按鈕（太陽/月亮圖示）
- 手機版漢堡選單
- 平滑滾動錨點導航
- 滾動時自動調整背景透明度

### 2. Hero 區域
- 三張圖片輪播（5秒自動切換）
- 背景圖片 + 漸層疊加層
- 支援手動點擊圓點切換
- 滑鼠懸停暫停輪播
- 滾動指示器動畫

### 3. 關於我們
- 三張卡片展示特色：
  - 正宗日式炭火
  - 新鮮精選食材
  - 親切現場服務
- 卡片懸停放大效果

### 4. 精選菜單
- 標籤式分類切換：
  - 🐔 雞肉
  - 🐂 牛肉
  - 🐖 豬肉
  - 🥬 蔬菜
  - 🍢 經典串燒
- 網格佈局展示菜品
- 每個菜品包含：圖片、名稱、描述、價格

### 5. 活動照片
- 8張照片網格展示
- 方形圖片（aspect-ratio: 1）
- 懸停縮放效果

### 6. 服務特色
- 四大特色卡片：
  - CP值超高
  - 適合聚餐
  - 當地人氣
  - 營業時間

### 7. 聯絡我們
- 營業資訊（地點、時間、電話）
- 快速聯絡卡片
- 不包含表單提交功能（靜態展示）

## 本地開發

### 靜態網站開發

```bash
# 進入網站目錄
cd website

# 啟動本地伺服器
python -m http.server 8000
# 或
npx http-server

# 訪問 http://localhost:8000
```

### POS 系統開發

**測試原型（當前階段）**：

```bash
# 方法 1：直接用瀏覽器打開
open /Users/laikaiyue/Documents/Project/hangrou/pos/prototype.html

# 方法 2：使用本地伺服器
cd /Users/laikaiyue/Documents/Project/hangrou/pos
python -m http.server 8000
# 訪問 http://localhost:8000/prototype.html
```

**原型功能測試清單**：

#### 點餐功能
- [ ] 點選商品加入購物車
- [ ] 調整商品數量
- [ ] 切換不同分類
- [ ] 測試規格選擇：
  - [ ] 選擇辣度（不辣、微辣、中辣、特辣）
  - [ ] 選擇客製化備註（少冰、去冰等）
  - [ ] 輸入自訂備註
  - [ ] 調整數量
  - [ ] 確認加入購物車
  - [ ] 驗證購物車顯示規格資訊

#### 折扣功能
- [ ] 測試三種自動折扣：
  - [ ] 單一品項折扣（例如：買3串烤香菇折$5）
  - [ ] 分類折扣（例如：買3串任何雞肉品項折$5）
  - [ ] 總數量折扣（例如：購物車滿5串任何品項折$20）
- [ ] 測試多個折扣同時套用
- [ ] 測試手動折扣：
  - [ ] 快速折扣按鈕（$10/$20/$50）
  - [ ] 自訂金額折扣
  - [ ] 百分比折扣（打9折、打8折）
  - [ ] 選擇折扣原因
  - [ ] 清除手動折扣
  - [ ] 驗證總計包含手動折扣

#### 結帳功能
- [ ] 結帳流程（輸入金額、計算找零）
- [ ] 測試快速金額按鈕（累加模式）
- [ ] 測試「收全額」功能（含手動折扣）
- [ ] 測試「歸零」功能
- [ ] 驗證找零計算正確（含手動折扣）
- [ ] 完成付款並查看訂單編號格式（`#20260126001`）

#### 觸控優化
- [ ] 連續點擊菜單項目，無延遲感
- [ ] 連續點擊數量增減按鈕，反應即時
- [ ] 連續點擊不同快速金額按鈕，無卡頓
- [ ] 測試震動回饋（如果 iPad 支援）
- [ ] 驗證沒有雙擊放大或雙指縮放

#### 銷售報表
- [ ] 查看銷售報表
- [ ] 驗���報表統計：
  - [ ] 營業額顯示原價（未折扣）
  - [ ] 今日總折扣金額正確
  - [ ] 今日利潤正確（原價 - 折扣）
  - [ ] 熱銷商品顯示簡潔（不顯示折扣）
  - [ ] 折扣明細正確顯示每個規則的使用次數和金額

#### 歷史查詢
- [ ] 測試日期查詢功能：
  - [ ] 日報表：選擇任意日期
  - [ ] 日報表：切換昨日
  - [ ] 週報表：選擇任意週
  - [ ] 週報表：切換上週
  - [ ] 月報表：選擇任意月份
  - [ ] 月報表：切換上月
- [ ] 生成測試資料（URL 加 `?test=true`）
- [ ] 驗證測試資料生成後自動載入報表
- [ ] 測試匯出 CSV 功能
  - [ ] 折扣明細正確顯示每個折扣規則的使用次數和金額
- [ ] 完成付款後查看統計更新

**Vue 3 專案開發（未來）**：

```bash
# 進入 POS 目錄
cd pos

# 初始化 Vue 3 專案
npm create vite@latest . -- --template vue-ts

# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev
```

詳細說明請參考���
- [pos/docs/VUE3-QUICKSTART.md](pos/docs/VUE3-QUICKSTART.md) - Vue 3 快速開始
- [pos/docs/POS-PLANNER.md](pos/docs/POS-PLANNER.md) - 完整開發規劃

### 測試暗黑模式
1. 點擊右上角主題切換按鈕
2. 或檢查開發者工具 → 渲染 → 模擬媒體特徵 → prefers-color-scheme: dark

### 測試響應式
1. 開啟瀏覽器開發者工具（F12）
2. 點擊裝置工具列圖示（Ctrl+Shift+M / Cmd+Shift+M）
3. 選擇不同裝置預設

## 網站常用維護操作

### 更新菜單價格
在 `website/index.html` 中搜尋對應的菜品名稱，修改 `.menu-price` 內容：
```html
<p class="menu-price">NT$ 50</p>
```

### 新增菜品
複製現有的 `.menu-item` 結構，修改圖片、名稱、描述和價格：
```html
<div class="menu-item">
    <div class="menu-image">
        <img src="images/menu/your-image.jpg" alt="菜品名稱" loading="lazy">
    </div>
    <div class="menu-info">
        <h3>菜品名稱</h3>
        <p class="menu-desc">菜品描述</p>
        <p class="menu-price">NT$ 價格</p>
    </div>
</div>
```

### 更換主題顏色
在 `website/css/style.css` 的 `:root` 中修改 CSS 變數：
```css
:root {
    --primary-color: #FF6B35;
    --secondary-color: #FF8C42;
}
```

### 新增實際圖片
1. 將圖片放入 `website/images/` 對應子目錄
2. 在 HTML 中引用：`<img src="images/your-image.jpg" alt="描述" loading="lazy">`
3. 建議圖片尺寸：
   - 菜品圖片：600x400px
   - 活動照片：600x600px（方形）
   - Hero 背景：1920x1080px

### 修改聯絡資訊
需在多處更新：
1. `website/index.html` 頁尾區域
2. `website/index.html` 聯絡我們區域
3. `website/index.html` JSON-LD 結構化資料
4. `README.md` 文件

## 部署

### 靜態網站部署

#### GitHub Pages
```bash
cd website
./deploy.sh
```

#### Cloudflare Pages
1. 連接 GitHub 儲存庫
2. 設定輸出目錄：`website`
3. 自動部署

#### 靜態託管服務
上傳 `website/` 目錄到任何靜態託管服務

### POS 系統部署（未來）
參考：[docs/DEPLOYMENT-GUIDE.md](docs/DEPLOYMENT-GUIDE.md)

## SEO 優化

### 已實作
- ✅ 完整的 Meta 標籤（title, description, keywords）
- ✅ Open Graph 標籤（Facebook/LinkedIn 分享）
- ✅ Twitter Card 標籤
- ✅ JSON-LD 結構化資料：
  - Restaurant 類型
  - LocalBusiness 類型
  - Service 類型
- ✅ Canonical URL
- ✅ 語意化 HTML5 標籤
- ✅ 圖片 alt 屬性
- ✅ 響應式設計（行動裝置友善）

### 重要 URL
- **主網域**：https://hangrou.com.tw/
- **OG 圖片路徑**：/images/og-image.jpg（需新增）
- **Twitter Card 圖片**：/images/twitter-card.jpg（需新增）

## 開發注意事項

### 圖片優化
- 所有圖片使用 `loading="lazy"` 懶載入
- 使用 WebP 格式可減小檔案大小
- Hero 背景圖使用 `background-attachment: fixed` 實現視差效果

### 效能優化
- Google Fonts 使用 `preconnect` 預先連線
- CSS 動畫使用 `transform` 和 `opacity`（GPU 加速）
- 避免layout shift（CLS）

### 瀏覽器相容性
- 使用 CSS 變數（IE 不支援）
- IntersectionObserver（現代瀏覽器）
- LocalStorage（需瀏覽器支援）

### 響應式注意事項
- 手機版選單寬度 100%
- 卡片網格使用 `repeat(auto-fit, minmax(...))` 自動適應
- 字體大小使用相對單位（rem）

### 語言與文字規範（繁體中文）

#### 📌 基本原則
**所有專案內容必須使用繁體中文（台灣）**

#### 檔案命名與變數
- ✅ 使用英文命名檔案和變數（程式碼標準）
- ✅ 例如：`prototype.html`, `dailyStats`, `updateCart()`
- ✅ 註解使用繁體中文說明

#### 使用者介面文字
- ✅ **必須使用繁體中文（台灣）**
- ✅ 正確用語：
  - ✓ 點餐系統（非「点餐系统」）
  - ✓ 結帳（非「结账」）
  - ✓ 購物車（非「购物车」）
  - ✓ 營���額（非「营业额」）
  - ✓ 訂單（非「订单」）
  - ✓ 統計（非「统计」）
  - ✓ 報表（非「报表」）

#### 常見用語對照
| 正確（繁體中文） | 錯誤（簡體中文） |
|----------------|----------------|
| 點餐 | 点餐 |
| 結帳 | 结账 |
| 購物車 | 购物车 |
| 營業額 | 营业额 |
| 訂單 | 订单 |
| 統計 | 统计 |
| 報表 | 报表 |
| 營收 | 营收 |
| 營運 | 运营 |
| 專案 | 项目 |
| 網路 | 网络 |
| 網頁 | 网页 |
| 線上 | 线上 |
| 標籤 | 标签 |
| 圖示 | 图标 |
| 圖片 | 图片 |
| 資料 | 数据 |
| 帳號 | 账号 |
| 密碼 | 密码 |
| 標準 | 标准 |
| 確認 | 确认 |
| 取消 | 取消 |
| 刪除 | 删除 |
| 新增 | 新增 |
| 修改 | 修改 |

#### 程式碼註解
```javascript
// ✅ 正確：註解使用繁體中文
// 更新購物車顯示
function updateCart() {
    // 計算總金額
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    // 更新 UI
    document.getElementById('cartTotal').textContent = `$${total}`;
}
```

#### 文件說明
- ✅ 所有 Markdown 文件必須使用繁體中文
- ✅ README、說明書、註解全部使用繁體中文
- ✅ API 文件、變數說明使用繁體中文

## 程式碼風格約定

### HTML
- 使用語意化標籤（nav, section, footer 等）
- 屬性值使用雙引號
- 自閉合標籤不需要斜線

### CSS
- 使用 CSS 變數定義顏色和尺寸
- BEM 命名規範（部分使用）
- 手機優先的響應式設計
- 使用 flexbox 和 grid 佈局

### JavaScript
- 使用 const/let（不使用 var）
- 箭頭函式
- 事件委託優化效能
- 清晰的註解分塊

### Vue 3 + TypeScript（POS 系統）
- 使用 Composition API
- 型別嚴格模式
- Pinia 狀態管理
- 單一檔案組件（SFC）

## 維護建議

### 定期檢查
- [ ] 驗證所有圖片連結正常
- [ ] 測試所有互動功能
- [ ] 檢查 SEO 評分
- [ ] 更新 JSON-LD 資料（如有變更）
- [ ] 測試表單功能（如新增）

### 內容更新
- 定期更新活動照片
- 新增季節性菜單
- 更新營業時間（如有調整）
- 新增客戶評價

### 效能監控
- 使用 Google PageSpeed Insights 測試
- 目標：手機版 > 90，桌面版 > 95
- 檢查 Largest Contentful Paint (LCP)
- 檢查 Cumulative Layout Shift (CLS)

## 疑難排解

### 常見問題

**問題**：輪播圖不切換
- 檢查 JavaScript 是否正確載入
- 檢查 `.hero-slide` 和 `.dot` 元素是否存在

**問題**：暗黑模式不生效
- 清除瀏覽器快取和 localStorage
- 檢查 CSS 變數是否正確定義

**問題**：圖片顯示不正常
- 檢查圖片路徑是否正確（注意相對路徑）
- 確認圖片檔案已上傳至 `website/images/`

**問題**：手機版選單無法開啟
- 檢查漢堡按鈕和選單的 ID 是否符合
- 檢查 CSS 媒體查詢是否生效

## 相關文件

### 專案總覽
- [README.md](README.md) - 專案整體說明

### 網站相關
- [website/README.md](website/README.md) - 網站詳細說明
- [docs/DEPLOYMENT-GUIDE.md](docs/DEPLOYMENT-GUIDE.md) - 部署指南
- [docs/SEO-CHECKLIST.md](docs/SEO-CHECKLIST.md) - SEO 檢查清單
- [docs/IMAGES-GUIDE.md](docs/IMAGES-GUIDE.md) - 圖片使用指南
- [docs/BBQKING-STYLE-GUIDE.md](docs/BBQKING-STYLE-GUIDE.md) - 設計風格指南
- [docs/GITHUB-PAGES-DEPLOYMENT.md](docs/GITHUB-PAGES-DEPLOYMENT.md) - GitHub Pages 部署

### POS 系統相關
- [pos/docs/POS-PLANNER.md](pos/docs/POS-PLANNER.md) - POS 開發規劃
- [pos/docs/VUE3-QUICKSTART.md](pos/docs/VUE3-QUICKSTART.md) - Vue 3 快速開始

## 發展階段

### Phase 1：靜態網站 ✅
- 品牌展示網站
- SEO 優化
- 響應式設計
- 部署上線（https://hangrou.com.tw）

### Phase 2：iPad POS 系統 🎨
**當前狀態：原型開發中**

**已完成**：
- ✅ 可操作原型（HTML/CSS/JavaScript）
- ✅ 點餐功能（分類切換、選單展示、購物車）
- ✅ 結帳功能（現金付款、找零計算）
- ✅ 規格選擇（辣度、客製化備註）
- ✅ 手動折扣（快速金額、自訂、百分比）
- ✅ 折扣系統（單一品項、分類、總數量）
- ✅ 銷售統計（日/週/月報表、即時統計）
- ✅ 歷史查詢（日期選擇、快速切換）
- ✅ 每日結帳條（銷售明細、匯出 CSV）
- ✅ 分類銷售占比
- ✅ 時段分析
- ✅ 熱銷商品 TOP 10
- ✅ 折扣明細統計
- ✅ 觸控優化（零延遲響應、觸覺回饋、防止干擾）
- ✅ 測試資料生成（過去7天）
- ✅ 結帳介面優化（總計含手動折扣）
- ✅ 訂單編號優化（移除 '-' 符號）
- ✅ 匯出功能優化（支援日期區間查詢匯出）
- ✅ 修正所有繁體中文亂碼

**待開發**：
- ⏳ Vue 3 專案建置
- ⏳ IndexedDB 資料庫整合
- ⏳ 列印機整合（ESC/POS）
- ⏳ 資料持久化
- ⏳ 平均客單價顯示
- ⏳ 測試與優化

**測試原型**：
```bash
# 快速測試
open /Users/laikaiyue/Documents/Project/hangrou/pos/prototype.html

# 或使用本地伺服器
cd /Users/laikaiyue/Documents/Project/hangrou/pos
python -m http.server 8000
```

### Phase 3：功能擴展 📋
- 會員系統
- 掃碼點餐
- 外送整合
- 行銷推播

---

**最後更新**：2026-02-07
**維護者**：Claude Code Assistant
**專案狀態**：多專案管理（網站已營運，POS 原型開發中）

**語言規範**：✅ 所有檔案、註解、UI 文字必須使用繁體中文（台灣）
