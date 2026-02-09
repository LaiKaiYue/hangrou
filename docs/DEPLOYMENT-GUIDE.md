# 🚀 快速部署指南

讓外部訪問測試您的網站有多種方案，以下從最快到最穩定排列：

---

## ⚡ 方案 1：ngrok（最快，推薦臨時測試）

### 安裝
```bash
# macOS
brew install ngrok

# 或下載：https://ngrok.com/download
```

### 使用步驟
```bash
# 1. 進入專案目錄
cd /Users/laikaiyue/Documents/Project/hangrou

# 2. 啟動本地服務器
python3 -m http.server 8000

# 3. 新開終端窗口，執行
ngrok http 8000
```

### 獲得的 URL
```
https://abc123.ngrok-free.app
```

### 優缺點
- ✅ 30 秒內完成
- ✅ 無需註冊
- ✅ 即時生效
- ⚠️ 重啟後 URL 會變
- ⚠️ 免費版有速度限制

---

## 🎯 方案 2：Netlify Drop（推薦快速分享）

### 網址
https://app.netlify.com/drop

### 步驟
1. 打開上述網址
2. 將 `hangrou` 資料夾直接拖入
3. 等待上傳（約 1 分鐘）
4. 獲得永久 URL

### 獲得的 URL
```
https://your-site-name.netlify.app
```

### 優缺點
- ✅ 無需註冊
- ✅ 永久 URL
- ✅ 自動 HTTPS
- ✅ 全球 CDN
- ✅ 免費無限流量
- ⚠️ 每次更新需重新上傳

---

## 🌟 方案 3：GitHub Pages（推薦長期使用）

### 前置準備
專案已初始化 Git，可立即使用！

### 步驟

#### 1. 在 GitHub 創建新倉庫
1. 訪問：https://github.com/new
2. 倉庫名稱：`hangrou-website`
3. 設為 Public（公開）
4. **不要**勾選 "Add a README file"
5. 點擊 "Create repository"

#### 2. 推送代碼到 GitHub
```bash
# 添加遠程倉庫（替換 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/hangrou-website.git

# 推送代碼
git branch -M main
git push -u origin main
```

#### 3. 啟用 GitHub Pages
1. 進入倉庫設置：Settings → Pages
2. Source 選擇：Deploy from a branch
3. Branch 選擇：main / root
4. 點擊 Save

#### 4. 等待部署（約 1-2 分鐘）
訪問：`https://YOUR_USERNAME.github.io/hangrou-website/`

### 更新網站
```bash
# 修改文件後
git add .
git commit -m "更新說明"
git push
```

### 優缺點
- ✅ 完全免費
- ✅ 永久 URL
- ✅ 自動 HTTPS
- ✅ 版本控制
- ✅ Git 更新方便
- ⚠️ 初次設置需 5 分鐘

---

## 🔥 方案 4：Vercel（最現代化）

### 網址
https://vercel.com

### 步驟
1. 使用 GitHub 登入
2. 點擊 "New Project"
3. 選擇您的 GitHub 倉庫
4. 點擊 "Deploy"

### 獲得的 URL
```
https://hangrou-website.vercel.app
```

### 優缺點
- ✅ 最快的部署速度
- ✅ 自動 HTTPS
- ✅ 自動域名
- ✅ Git 推送自動更新
- ✅ 全球 CDN
- ✅ 每次更新重新部署

---

## 💰 方案 5：付費託管服務

### 選項
- **Amazon S3 + CloudFront**：穩定、便宜
- **Google Cloud Storage**：與 Google 整合
- **Azure Static Web Apps**：Microsoft 方案
- **Cloudflare Pages**：極速 CDN

---

## 📊 方案比較

| 方案 | 設置時間 | 費用 | URL 類型 | 更新方式 | 推薦場景 |
|------|---------|------|----------|----------|----------|
| ngrok | 30 秒 | 免费 | 臨時 | 重啟變化 | 臨時測試 |
| Netlify Drop | 1 分鐘 | 免费 | 永久 | 重新上傳 | 快速分享 |
| GitHub Pages | 5 分鐘 | 免费 | 永久 | Git push | 個人項目 |
| Vercel | 5 分鐘 | 免费 | 永久 | Git push | 專業項目 |

---

## 🎯 推薦選擇

### 立即測試（30 秒）
```bash
ngrok http 8000
```

### 快速分享給客戶（1 分鐘）
訪問：https://app.netlify.com/drop

### 長期穩定運營（5 分鐘）
使用 GitHub Pages 或 Vercel

---

## ✅ 快速啟動命令

### 本地測試
```bash
cd /Users/laikaiyue/Documents/Project/hangrou
python3 -m http.server 8000
# 訪問：http://localhost:8000
```

### ngrok 內部分享
```bash
# 新終端
ngrok http 8000
```

### Git 推送更新
```bash
git add .
git commit -m "更新內容"
git push
```

---

**建議**：先用 ngrok 快速測試，確認無問題後再用 GitHub Pages 或 Vercel 做長期部署！

---

**文檔更新**：2026-01-20
