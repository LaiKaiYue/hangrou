# 夯肉 HANGROU 專案

本專案包含兩個獨立的子系統：

## 📁 專案結構

```
hangrou/
├── 📱 pos/                          # iPad POS 點餐系統
│   ├── docs/                        # POS 專案文件
│   │   ├── POS-PLANNER.md           # 開發規劃
│   │   ├── VUE3-QUICKSTART.md        # Vue 3 快速開始
│   │   └── VUE-REACT-COMPARISON.md   # 技術選型分析
│   ├── src/                         # POS 原始碼（待建立）
│   │   ├── components/
│   │   ├── views/
│   │   ├── stores/
│   │   ├── db/
│   │   ├── App.vue
│   │   └── main.ts
│   ├── public/                      # 靜態資源
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
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
│   └── README.md                   # 網站說明
│
├── 📚 docs/                        # 共用文件
│   ├── DEPLOYMENT-GUIDE.md         # 部署指南
│   ├── SEO-CHECKLIST.md            # SEO 檢查清單
│   ├── IMAGES-GUIDE.md             # 圖片使用指南
│   └── BBQKING-STYLE-GUIDE.md      # 設計風格指南
│
├── .git/                           # Git 版本控制
├── .gitignore
├── CLAUDE.md                       # AI 助手專案指南
└── README.md                       # 本文件
```

---

## 🌐 靜態行銷網站（website/）

### 基本資訊
- **技術**：純 HTML/CSS/JavaScript
- **用途**：品牌行銷、菜單展示、營業資訊
- **部署**：GitHub Pages / Cloudflare Pages
- **狀態**：✅ 已完成，營運中
- **網址**：https://hangrou.com.tw

### 功能特色
- 首頁展示、關於我們、精選菜單
- 服務場景展示
- 響應式設計（手機/平板/桌機）
- SEO 優化（結構化資料、社群分享）
- 動畫效果與互動體驗

### 快速開始
```bash
cd website
python -m http.server 8000
# 訪問 http://localhost:8000
```

詳細說明請參考：[website/README.md](website/README.md)

---

## 📱 iPad POS 點餐系統（pos/）

### 基本資訊
- **技術**：Vue 3 + TypeScript + Vant 4
- **平台**：iPad 9 (Safari 瀏覽器)
- **資料庫**：IndexedDB（本地）
- **列印**：ESC/POS 協定（網路列印機）
- **狀態**：🚧 規劃中，待開發

### 功能特色
- 點餐系統（網格化選單、即時購物車）
- 結帳系統（現金付款、找零計算）
- 出單系統（自動列印廚房單/小票）
- 銷售統計（日/週/月報表、圖表分析）

### 快速開始
```bash
cd pos
npm install
npm run dev
```

詳細說明請參考：[pos/docs/POS-PLANNER.md](pos/docs/POS-PLANNER.md)

---

## 🚀 快速導覽

### 我想查看網站
```bash
cd website
python -m http.server 8000
# 開啟瀏覽器訪問 http://localhost:8000
```

### 我想開發 POS 系統
1. 閱讀 [pos/docs/POS-PLANNER.md](pos/docs/POS-PLANNER.md) - 完整規劃
2. 閱讀 [pos/docs/VUE3-QUICKSTART.md](pos/docs/VUE3-QUICKSTART.md) - 快速開始
3. 初始化專案：
   ```bash
   cd pos
   npm create vite@latest . -- --template vue-ts
   npm install
   ```

### 我想部署網站
參考：[docs/DEPLOYMENT-GUIDE.md](docs/DEPLOYMENT-GUIDE.md)

### 我想優化 SEO
參考：[docs/SEO-CHECKLIST.md](docs/SEO-CHECKLIST.md)

---

## 📞 聯絡資訊

- **品牌名稱**：夯肉 HANGROU
- **電話**：0963-261-613
- **地址**：台中市北屯區致富路／致富一街（北屯攤夜市）
- **營業時間**：週一、三、五、六、日 17:00～23:00（週二、四休息）

---

## 📚 專案文件

### 網站相關
- [部署指南](docs/DEPLOYMENT-GUIDE.md)
- [SEO 檢查清單](docs/SEO-CHECKLIST.md)
- [圖片使用指南](docs/IMAGES-GUIDE.md)
- [設計風格指南](docs/BBQKING-STYLE-GUIDE.md)

### POS 系統相關
- [POS 開發規劃](pos/docs/POS-PLANNER.md)
- [Vue 3 快速開始](pos/docs/VUE3-QUICKSTART.md)
- [技術選型分析](pos/docs/VUE-REACT-COMPARISON.md)

---

## 🗺️ 發展階段

### Phase 1：靜態網站 ✅
- 品牌展示網站
- SEO 優化
- 響應式設計
- 部署上線

### Phase 2：iPad POS 系統 🚧
- 點餐功能
- 結帳功能
- 出單系統
- 銷售統計
- 預計 10-12 週開發

### Phase 3：功能擴展 📋
- 會員系統
- 掃碼點餐
- 外送整合
- 行銷推播

---

**最後更新**：2026-01-26
**維護者**：Claude Code Assistant
**專案狀態**：多專案管理（網站已營運，POS 開發中）
