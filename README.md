# 夯肉 HANGROU - 日式燒烤餐車包車服務網站

## 專案簡介

這是一個日式燒烤餐車包車服務的靜態展示網站，採用純 HTML/CSS/JS 開發，具有響應式設計和現代化的使用者體驗。已完整優化 SEO，包含結構化數據、Open Graph、Twitter Card 等。

## 功能特色

- **首頁展示** - 震撼的 Hero 區域，吸引訪客注意力
- **關於我們** - 展示餐車特色和服務亮點
- **精選菜單** - 標籤式切換的菜單展示
- **服務場景** - 四大服務類型展示（婚宴、企業活動、私人派對、市集活動）
- **包車預約** - 完整的預約表單與流程說明
- **響應式設計** - 支援手機、平板、桌機等各種裝置
- **動畫效果** - 平滑的滾動動畫和互動效果
- **SEO 優化** - 完整的 SEO 設定，包含結構化數據、社群分享優化

## SEO 優化項目

### 基本 SEO
- ✅ 優化的頁面標題（Title）
- ✅ 吸引的 Meta 描述
- ✅ 相關關鍵字標籤
- ✅ Canonical URL 設定
- ✅ 語言宣告（zh-TW）

### 結構化數據（JSON-LD）
- ✅ Restaurant 結構化數據
- ✅ LocalBusiness 結構化數據
- ✅ Service 結構化數據
- ✅ 完整的營業時間、服務範圍、評分等資訊

### 社群媒體優化
- ✅ Open Graph 標籤（Facebook/LinkedIn）
- ✅ Twitter Card 標籤
- ✅ 社群分享圖片設定
- ✅ 網站名稱和區域設定

### 技術 SEO
- ✅ 語義化 HTML5 標籤
- ✅ 響應式設計（Mobile-Friendly）
- ✅ 快速載入優化（Preconnect）
- ✅ Favicon 和 App Icons 設定
- ✅ Sitemap 和 Robots.txt（需自行添加）

## 設計風格

採用日式燒烤風格設計：
- **主色調**：日式紅 (#D32F2F)
- **輔助色**：炭火橙 (#FFA726)
- **點綴色**：深棕 (#5D4037)
- **背景色**：溫暖米色 (#FFF8E1)

## 專案結構

```
hangrou/
├── index.html          # 主���面
├── css/
│   └── style.css      # 樣式表
├── js/
│   └── main.js        # JavaScript 互動邏輯
└── README.md          # 專案說明
```

## 使用方式

1. 直接在瀏覽器中打開 `index.html` 檔案
2. 或使用本地伺服器（推薦）：
   ```bash
   # 使用 Python
   python -m http.server 8000

   # 使用 Node.js (http-server)
   npx http-server
   ```

3. 在瀏覽器中訪問 `http://localhost:8000`

## 主要功能說明

### 導航功能
- 固定式導航欄，滾動時自動調整透明度
- 手機版漢堡菜單
- 平滑滾動錨點導航

### 預約表單
- 完整的表單驗證
- 日期選擇器（最小值為今天）
- 電話格式驗證
- 表單提交後的回饋訊息

### 動畫效果
- Hero 區域淡入動畫
- 滾動時卡片元素依次浮現
- 懸停效果和過渡動畫
- 滾動指示器動畫

## 響應式斷點

- **桌機**: > 968px
- **平板**: 768px - 968px
- **手機**: < 768px

## 瀏覽器支援

- Chrome (推薦)
- Firefox
- Safari
- Edge

## 自訂修改

### 更換 Logo
在 `index.html` 中修改：
```html
<div class="logo">夯肉 HANGROU</div>
```

### 更換顏色
在 `css/style.css` 的 `:root` 中修改 CSS 變數：
```css
:root {
    --primary-color: #D32F2F;    /* 主色調 */
    --secondary-color: #FFA726;  /* 輔助色 */
    --accent-color: #5D4037;     /* 點綴色 */
}
```

### 添加實際圖片
替換 `index.html` 中的 placeholder：
```html
<!-- 將 -->
<div class="placeholder-img">🥩</div>

<!-- 替換為 -->
<img src="images/your-image.jpg" alt="菜品名稱">
```

### 修改聯絡資訊
在 `index.html` 中搜尋並替換以下內容：
- 電話號碼：`0900-XXX-XXX`
- Email：`booking@hangrou.com.tw`
- LINE ID：`@hangrou`
- 網站 URL：`https://hangrou.com.tw/`

**重要記得更新：**
1. JSON-LD 結構化數據中的電話、Email、URL
2. Open Graph 和 Twitter Card 的 URL 和圖片路徑
3. 頁腳的聯絡資訊
4. 表單提交後的聯絡資訊顯示

## 後續優化建議

### 必要更新
1. **更新真實聯絡資訊** - 替換所有佔位符為實際聯絡方式
2. **添加社群連結** - 更新 JSON-LD 中的 `sameAs` 為實際社群媒體連結
3. **上傳實際圖片** - 創建 OG 圖片（1200x630px）和 Twitter Card 圖片
4. **創建 Favicon** - 添加網站圖標（favicon.ico, png 等）

### 進階優化
1. **添加真實圖片** - 使用實際的燒烤菜品照片
2. **整合後端** - 連接資料庫和表單提交 API
3. **多語言支援** - 添加中英文切換功能
4. **Google Analytics** - 添加流量分析代碼
5. **Google Search Console** - 驗證網站並監控搜尋表現
6. **線上支付** - 整合信用卡或 LINE Pay 支付
7. **後台管理** - 添加預約管理系統

### SEO 進階優化
1. **創建 sitemap.xml** - 幫助搜尋引擎索引
2. **創建 robots.txt** - 指引搜尋引擎爬蟲
3. **添加 Blog** - 定期發布燒烤相關文章，提升內容 SEO
4. **客戶評價整合** - 添加 Google 評論或 Facebook 評論
5. **本地 SEO** - 註冊 Google 商家資料
6. **Schema Markup 測試** - 使用 [Rich Results Test](https://search.google.com/test/rich-results) 驗證

## SEO 驗證工具

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Schema Markup Validator](https://validator.schema.org/)

## 授權

MIT License

---

**夯肉 HANGROU** - 專業日式炭火燒烤餐車包車服務
🔥 日式炭火燒烤 | 全台包車服務 | 婚宴尾牙企業活動
