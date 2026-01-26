# CLAUDE.md - 夯肉 HANGROU 專案指南

## 專案概述

**專案名稱**：夯肉 HANGROU
**專案類型**：日式炭火燒烤餐車服務網站
**技術堆疊**：純 HTML/CSS/JavaScript（靜態網站）
**部署平台**：支援 GitHub Pages、Cloudflare Pages 等靜態託管

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
├── index.html              # 主頁面（包含所有內容）
├── css/
│   └── style.css          # 完整樣式表（含暗黑模���）
├── js/
│   └── main.js            # 互動邏輯
├── images/
│   ├── about/             # 關於我們圖片
│   └── ...                # 其他圖片資源
├── .htaccess              # Apache 設定
├── robots.txt             # 搜尋引擎爬蟲規則
├── sitemap.xml            # 網站地圖
├── deploy.sh              # 部署腳本
├── README.md              # 專案說明文件
├── BBQKING-STYLE-GUIDE.md # 設計風格指南
├── DEPLOYMENT-GUIDE.md    # 部署指南
├── SEO-CHECKLIST.md       # SEO 檢查清單
├── IMAGES-GUIDE.md        # 圖片使用指南
└── CLAUDE.md              # 本檔案（AI 助手指南）
```

## 設計系統

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

## 核心功能

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

### 7. 聯���我們
- 營業資訊（地點、時間、電話）
- 快速聯絡卡片
- 不包含表單提交功能（靜態展示）

## JavaScript 功能

### 主題切換
- localStorage 儲存使用者偏好
- 支援系統主題自動檢測（prefers-color-scheme）
- 切換時更新導航列背景色

### 動畫效果
- IntersectionObserver 實現滾動動畫
- 卡片元素依次浮現（opacity + translateY）
- 頁面載入淡入效果

### 輪播圖
- 自動播放（5秒間隔）
- 點擊圓點手動切換
- 滑鼠懸停暫停

### 手機版選單
- 漢堡圖示動畫（X 形變）
- 點擊選單項後自動關閉

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

## 常用任務

### 更新菜單價格
在 `index.html` 中搜尋對應的菜品名稱，修改 `.menu-price` 內容：
```html
<p class="menu-price">NT$ 50</p>
```

### 新增菜品
複製現有的 `.menu-item` 結構，修改圖片、名稱、描述和價格：
```html
<div class="menu-item">
    <div class="menu-image">
        <img src="圖片路徑" alt="菜品名稱" loading="lazy">
    </div>
    <div class="menu-info">
        <h3>菜品名稱</h3>
        <p class="menu-desc">菜品描述</p>
        <p class="menu-price">NT$ 價格</p>
    </div>
</div>
```

### 更換主題顏色
在 `css/style.css` 的 `:root` 中修改 CSS 變數：
```css
:root {
    --primary-color: #FF6B35;
    --secondary-color: #FF8C42;
}
```

### 新增實際圖片
1. 將圖片放入 `images/` 目錄
2. 在 HTML 中引用：`<img src="images/your-image.jpg" alt="描述">`
3. 建議圖片尺寸：
   - 菜品圖片：600x400px
   - 活動照片：600x600px（方形）
   - Hero 背景：1920x1080px

### 修改聯絡資訊
需在多處更新：
1. `index.html` 頁尾區域
2. `index.html` 聯絡我們區域
3. JSON-LD 結構化資料（第 41-42 行）
4. README.md 文件

## 開發注意事項

### 圖片優化
- 所有圖片使用 `loading="lazy"` 懶載入
- 使用 WebP 格式可減小檔案大小
- Hero 背景圖使用 `background-attachment: fixed` 實現視差效果

### 效能優化
- Google Fonts 使用 `preconnect` 預先連線
- CSS 動畫使用 `transform` 和 `opacity`（GPU 加速）
- 避免_layout shift_（CLS）

### 瀏覽器相容性
- 使用 CSS 變數（IE 不支援）
- IntersectionObserver（現代瀏覽器）
- LocalStorage（需瀏覽器支援）

### 響應式注意事項
- 手機版選單寬度 100%
- 卡片網格使用 `repeat(auto-fit, minmax(...))` 自動適應
- 字體大小使用相對單位（rem）

## 本地開發

### 啟動本地伺服器
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server
```

訪問：http://localhost:8000

### 測試暗黑模式
1. 點擊右上角主題切換按鈕
2. 或檢查開發者工具 → 渲染 → 模擬媒體特徵 → prefers-color-scheme: dark

### 測試響應式
1. 開啟瀏覽器開發者工具（F12）
2. 點擊裝置工具列圖示（Ctrl+Shift+M / Cmd+Shift+M）
3. 選擇不同裝置預設

## 部署

### GitHub Pages
```bash
./deploy.sh
```

### Cloudflare Pages
透過 Cloudflare Dashboard 連接 GitHub 儲存庫自動部署

### 靜態伺服器
上傳整個專案資料夾到任何靜態託管服務

## 相關文件

- `README.md` - 專案基本說明
- `BBQKING-STYLE-GUIDE.md` - 設計風格詳細指南
- `DEPLOYMENT-GUIDE.md` - 完整部署指南
- `SEO-CHECKLIST.md` - SEO 優化檢查清單
- `IMAGES-GUIDE.md` - 圖片使用和優化指南
- `GITHUB-PAGES-DEPLOYMENT.md` - GitHub Pages 部署教學

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
- 檢查圖片路徑是否正確
- 確認圖片檔案已上傳

**問題**：手機版選單無法開啟
- 檢查漢堡按鈕和選單的 ID 是否符合
- 檢查 CSS 媒體查詢是否生效

## 聯絡方式

如有問題或需要協助，請查看專案根目錄的相關文件或提交 Issue。

---

**最後更新**：2026-01-26
**維護者**：Claude Code Assistant
