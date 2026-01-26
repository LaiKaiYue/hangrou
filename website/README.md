# 夯肉 HANGROU - 靜態行銷網站

## 專案概述

這是夯肉 HANGROU 的官方行銷網站，採用純靜態 HTML/CSS/JavaScript 技術建置。

### 技術資訊
- **技術堆疊**：純 HTML/CSS/JavaScript
- **部署平台**：GitHub Pages / Cloudflare Pages / 靜態託管
- **狀態**：✅ 已完成，營運中
- **網址**：https://hangrou.com.tw

## 功能特色

### ✅ 已實作功能
- 響應式設計（手機/平板/桌機）
- 暗黑模式切換
- Hero 輪播圖（5秒自動切換）
- 關於我們卡片展示
- 精選菜單分類切換（雞肉/牛肉/豬肉/蔬菜/經典串燒）
- 活動照片網格展示
- 服務特色展示
- 聯絡資訊區域
- SEO 優化（完整 Meta 標籤、Open Graph、Twitter Card、JSON-LD 結構化資料）

### 頁面結構
```
website/
├── index.html              # 主頁面（包含所有內容）
├── css/
│   └── style.css          # 完整樣式表（含暗黑模式）
├── js/
│   └── main.js            # 互動邏輯
├── images/
│   ├── about/             # 關於我們圖片
│   ├── hero/              # Hero 輪播圖
│   ├── menu/              # 菜單圖片
│   └── activity/          # 活動照片
├── .htaccess              # Apache 設定
├── robots.txt             # 搜尋引擎爬蟲規則
├── sitemap.xml            # 網站地圖
└── README.md              # 本文件
```

## 快速開始

### 本地開發

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server

# 訪問 http://localhost:8000
```

### 測試暗黑模式
1. 點擊右上角主題切換按鈕（太陽/月亮圖示）
2. 或在瀏覽器開發者工具中模擬：渲染 → 模擬媒體特徵 → prefers-color-scheme: dark

### 測試響應式
1. 開啟瀏覽器開發者工具（F12）
2. 點擊裝置工具列圖示（Ctrl+Shift+M / Cmd+Shift+M）
3. 選擇不同裝置預設（手機/平板/桌機）

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

### 響應式斷點
- **桌面版**：> 968px
- **平板版**：768px - 968px
- **手機版**：< 768px

## 常用維護操作

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
在 `css/style.css` 的 `:root` 中修改 CSS 變數：
```css
:root {
    --primary-color: #FF6B35;
    --secondary-color: #FF8C42;
}
```

### 新增圖片
1. 將圖片放入 `images/` 對應子目錄
2. 建議圖片尺寸：
   - 菜品圖片：600x400px
   - 活動照片：600x600px（方形）
   - Hero 背景：1920x1080px
3. 在 HTML 中引用：`<img src="images/your-image.jpg" alt="描述" loading="lazy">`

### 更新聯絡資訊
需在多處更新：
1. `index.html` 頁尾區域（footer）
2. `index.html` 聯絡我們區域（#contact）
3. `index.html` JSON-LD 結構化資料

## SEO 優化

### 已實作
- ✅ 完整 Meta 標籤（title, description, keywords）
- ✅ Open Graph 標籤（Facebook/LinkedIn 分享）
- ✅ Twitter Card 標籤
- ✅ JSON-LD 結構化資料（Restaurant、LocalBusiness、Service）
- ✅ Canonical URL
- ✅ 語意化 HTML5 標籤
- ✅ 圖片 alt 屬性（使用 loading="lazy" 懶載入）
- ✅ 響應式設計（行動裝置友善）

### 效能目標
- 手機版 PageSpeed：> 90
- 桌面版 PageSpeed：> 95
- LCP（Largest Contentful Paint）：< 2.5s
- CLS（Cumulative Layout Shift）：< 0.1

## 部署

### GitHub Pages
```bash
# 從專案根目錄執行
./deploy.sh
```

### Cloudflare Pages
1. 連接 GitHub 儲存庫
2. 設定構建命令：留空（靜態網站不需要）
3. 設定輸出目錄：`website`
4. 自動部署

### 靜態託管服務
上傳整個 `website/` 目錄到任何靜態託管服務

## 相關文件

- [部署指南](../docs/DEPLOYMENT-GUIDE.md)
- [SEO 檢查清單](../docs/SEO-CHECKLIST.md)
- [圖片使用指南](../docs/IMAGES-GUIDE.md)
- [設計風格指南](../docs/BBQKING-STYLE-GUIDE.md)
- [專案總覽](../README.md)

## 瀏覽器相容性

- ✅ Chrome 90+（推薦）
- ✅ Safari 14+
- ✅ Firefox 88+
- ✅ Edge 90+
- ⚠️ IE 不支援（使用 CSS 變數）

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
- 確認圖片檔案已上傳至 `images/` 目錄

**問題**：手機版選單無法開啟
- 檢查漢堡按鈕和選單的 ID 是否符合
- 檢查 CSS 媒體查詢是否生效

## 定期維護

### 每月檢查
- [ ] 驗證所有圖片連結正常
- [ ] 測試所有互動功能
- [ ] 檢查 Google PageSpeed 評分
- [ ] 更新 JSON-LD 資料（如有變更）

### 內容更新
- 定期更新活動照片
- 新增季節性菜單
- 更新營業時間（如有調整）
- 新增客戶評價

---

**最後更新**：2026-01-26
**維護者**：Claude Code Assistant
**專案狀態**：✅ 已完成，正常營運中
