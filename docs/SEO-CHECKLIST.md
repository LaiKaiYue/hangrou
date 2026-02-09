# SEO 上線檢查清單

## 上線前必須完成的項目

### ✅ 1. 基本設定更新

- [ ] 更新所有真實聯絡資訊
  - [ ] 電話號碼（index.html 多處）
  - [ ] Email 地址（index.html）
  - [ ] LINE ID（index.html）
  - [ ] 網站 URL（所有 JSON-LD、meta 標籤）

### ✅ 2. 圖片資源準備

- [ ] 創建網站 Favicon
  - [ ] favicon.ico (32x32)
  - [ ] favicon-16x16.png (16x16)
  - [ ] favicon-32x32.png (32x32)
  - [ ] apple-touch-icon.png (180x180)

- [ ] 創建社群分享圖片
  - [ ] og-image.jpg (1200x630px, 用於 Facebook)
  - [ ] twitter-card.jpg (1200x630px, 用於 Twitter)
  - [ ] logo.png (500x500px, 用於結構化資料)
  - [ ] cover.jpg (1200x630px, 網站封面圖)

### ✅ 3. 結構化資料驗證

- [ ] 使用 [Google Rich Results Test](https://search.google.com/test/rich-results) 測試
- [ ] 使用 [Schema Markup Validator](https://validator.schema.org/) 驗證
- [ ] 確認所有 JSON-LD 資料正確無誤

### ✅ 4. 社群分享測試

- [ ] 使用 [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) 測試
- [ ] 使用 [Twitter Card Validator](https://cards-dev.twitter.com/validator) 測試
- [ ] 確認分享預覽正確顯示

### ✅ 5. SEO 工具註冊

- [ ] 註冊 [Google Search Console](https://search.google.com/search-console)
- [ ] 提交 sitemap.xml
- [ ] 設定目標國家/地區（台灣）
- [ ] 檢查是否有爬取錯誤

- [ ] 註冊 [Google Analytics](https://analytics.google.com/)
- [ ] 安裝追蹤代碼（在 `</head>` 前添加）

### ✅ 6. 本地 SEO 設定

- [ ] 註冊 [Google 商家資料](https://business.google.com/)
- [ ] 完整填寫商家資訊
- [ ] 添加營業地址
- [ ] 添加營業時間
- [ ] 上傳商家照片
- [ ] 鼓勵客戶留下 Google 評論

### ✅ 7. 內容優化

- [ ] 確認標題標籤（Title）吸引人且包含關鍵字
- [ ] 確認 Meta 描述吸引人且包含關鍵字
- [ ] 檢查所有 H1-H6 標題結構
- [ ] 確認圖片 alt 標籤（添加實際圖片時）

### ✅ 8. 技術 SEO 檢查

- [ ] 測試網站載入速度（[PageSpeed Insights](https://pagespeed.web.dev/)）
- [ ] 測試網站在手機上的顯示（[Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)）
- [ ] 檢查所有連結正常運作
- [ ] 確認 robots.txt 可存取（https://hangrou.com.tw/robots.txt）
- [ ] 確認 sitemap.xml 可存取（https://hangrou.com.tw/sitemap.xml）

### ✅ 9. 安全性設定

- [ ] 安裝 SSL 憑證（HTTPS）
- [ ] 更新 .htaccess 啟用 HTTPS 重新導向
- [ ] 設定安全標頭

### ✅ 10. 社群媒體設定

- [ ] 創建 Facebook 專頁
- [ ] 創建 Instagram 帳號
- [ ] 創建 LINE 官方帳號
- [ ] 更新 JSON-LD 中的 `sameAs` 連結
- [ ] 在網站頁腳添加社群連結

## 進階優化（可選）

### 內容行銷
- [ ] 添加 Blog 部落格功能
- [ ] 定期發布燒烤相關文章
- [ ] 添加客戶案例/評價頁面
- [ ] 添加常見問題（FAQ）頁面

### 技術進階
- [ ] 實施 AMP（加速行動頁面）
- [ ] 添加語音搜尋優化
- [ ] 實施結構化資料的 FAQ 頁面
- [ ] 添加產品/價格結構化資料

### 效能優化
- [ ] 使用 CDN 加速
- [ ] 圖片懶加載（Lazy Loading）
- [ ] CSS/JS 壓縮和合併
- [ ] 啟用瀏覽器快取

### 追蹤與分析
- [ ] 設定轉換追蹤（表單提交、電話點擊）
- [ ] 設定事件追蹤（滾動深度、點擊事件）
- [ ] 設定再行銷列表
- [ ] 連結 Facebook Pixel
- [ ] 連結 LINE Tag

## 上線後維護

### 每週
- [ ] 檢查 Google Search Console 錯誤
- [ ] 回覆客戶評論
- [ ] 發布社群媒體內容

### 每月
- [ ] 分析流量來源和關鍵字排名
- [ ] 更新網站內容
- [ ] 檢查失效連結
- [ ] 競品分析

### 每季
- [ ] 全面 SEO 效能評估
- [ ] 更新關鍵字策略
- [ ] 優化轉換率
- [ ] 技術審查

## 重要提醒

⚠️ **請務必在上線前更新以下佔位符：**
- 所有 `0900-XXX-XXX` → 真實電話
- 所有 `booking@hangrou.com.tw` → 真實 Email
- 所有 `@hangrou` → 真實 LINE ID
- 所有 `https://hangrou.com.tw/` → 真實網站 URL
- JSON-LD 中的評分數據（刪除或更新為真實數據）
- JSON-LD 中的地理座標（更新為實際位置）
- JSON-LD 中的社群連結（更新為實際連結）

---

**完成所有檢查項目後，您的網站就具備完整的 SEO 優化了！** 🎉
