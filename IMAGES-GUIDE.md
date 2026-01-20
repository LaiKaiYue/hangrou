# 真實燒烤圖片使用指南

## 📸 目前使用的圖片來源

網站目前使用 **Unsplash** 的免費高品質圖片，所有圖片皆可免費商業使用。

### 圖片來源
- **Unsplash**: https://unsplash.com
- 授權：Unsplash License（免費商業使用）
- 無需註冊即可使用
- 圖片來自全球攝影師

## 🔄 更換為自家照片

若要使用餐廳的真實照片，請按照以下步驟：

### 1. 準備照片

建議的照片規格：
- **尺寸**：1200px × 800px 或更高（4:3 比例）
- **格式**：JPG 或 PNG
- **檔案大小**：每張建議 < 500KB（優化後）
- **命名**：使用有意義的檔名，如 `yakitori-chicken.jpg`

### 2. 照片放置位置

將照片放入對應的目錄：
```
hangrou/
├── images/
│   ├── menu/           # 菜單照片
│   │   ├── chicken/    # 雞肉類照片
│   │   ├── beef/       # 牛肉類照片
│   │   ├── pork/       # 豬肉類照片
│   │   ├── vegetable/  # 蔬菜類照片
│   │   └── others/     # 其他串燒照片
│   ├── about/          # 關於我們照片
│   └── services/       # 服務照片
```

### 3. HTML 替換方式

**目前使用線上圖片的格式：**
```html
<div class="menu-image">
    <img src="https://images.unsplash.com/photo-xxx..."
         alt="照燒雞腿 - 日式燒烤"
         loading="lazy">
</div>
```

**替換為本地圖片：**
```html
<div class="menu-image">
    <img src="images/menu/chicken/teriyaki-chicken.jpg"
         alt="照燒雞腿 - 日式燒烤"
         loading="lazy">
</div>
```

### 4. 圖片優化建議

使用工具優化照片以提升網站速度：

**線上工具：**
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/
- ImageOptim: https://imageoptim.com/

**命令行工具：**
```bash
# 使用 ImageMagick
convert input.jpg -quality 85 -strip output.jpg

# 使用 jpegoptim
jpegoptim --max=85 input.jpg
```

### 5. 拍攝建議

為了獲得最佳照片效果：

**燒烤照片拍攝技巧：**
- ✅ 在自然光下拍攝
- ✅ 使用乾淨的餐具和背景
- ✅ 捕捉炭火和煙霧的氣氛
- ✅ 展示食物的質感和光澤
- ✅ 拍攝多種角度（45度、俯視）

**設備建議：**
- 智能手機（iPhone 12+ 或同等級別）
- 單眼相機更佳
- 使用自然光或柔光燈
- 避免使用閃光燈

## 📋 圖片清單

### 雞肉類 (5張)
1. 照燒雞腿 - `images/menu/chicken/teriyaki-chicken.jpg`
2. 雞腿蔥肉 - `images/menu/chicken/chicken-negima.jpg`
3. 雞心 - `images/menu/chicken/chicken-heart.jpg`
4. 雞皮 - `images/menu/chicken/chicken-skin.jpg`
5. 七里香 - `images/menu/chicken/chicken-gizzard.jpg`

### 牛肉類 (2張)
1. 無骨牛小排 - `images/menu/beef/short-rib.jpg`
2. 鹽烤牛肋 - `images/menu/beef/salted-rib.jpg`

### 豬肉類 (6張)
1. 孜然松阪豬 - `images/menu/pork/cumin-pork-jowl.jpg`
2. 椒鹽豬五花 - `images/menu/pork/salt-pepper-pork-belly.jpg`
3. 豬肉青蔥卷 - `images/menu/pork/pork-negima.jpg`
4. 醬燒豬五花 - `images/menu/pork/teriyaki-pork-belly.jpg`
5. 豬五花水蓮 - `images/menu/pork/pork-belly-water-lily.jpg`
6. 豬五花金針菇 - `images/menu/pork/pork-belly-enoki.jpg`

### 蔬菜類 (10張)
1. 櫛瓜 - `images/menu/vegetable/squash.jpg`
2. 青椒 - `images/menu/vegetable/pepper.jpg`
3. 香菇 - `images/menu/vegetable/shiitake.jpg`
4. 茄子 - `images/menu/vegetable/eggplant.jpg`
5. 絲瓜 - `images/menu/vegetable/luffa.jpg`
6. 杏鮑菇 - `images/menu/vegetable/king-oyster-mushroom.jpg`
7. 玉米筍 - `images/menu/vegetable/baby-corn.jpg`
8. 青花菜 - `images/menu/vegetable/broccoli.jpg`
9. 四季豆 - `images/menu/vegetable/green-bean.jpg`
10. 娃娃菜 - `images/menu/vegetable/baby-cabbage.jpg`

### 經典串燒 (9張)
1. 米血 - `images/menu/others/rice-cake.jpg`
2. 貢丸 - `images/menu/others/meatball.jpg`
3. 甜不辣 - `images/menu/others/fish-cake.jpg`
4. 鱈魚丸 - `images/menu/others/cod-fishball.jpg`
5. 鑫鑫腸 - `images/menu/others/sausage.jpg`
6. 百頁豆腐 - `images/menu/others/tofu-skin.jpg`
7. 豆干 - `images/menu/others/dried-tofu.jpg`
8. 米腸 - `images/menu/others/rice-sausage.jpg`
9. 豆包 - `images/menu/others/tofu-pouch.jpg`

## 🎨 Alt 屬性說明

所有圖片都應該包含描述性的 alt 屬性：
- 幫助 SEO
- 改善無障礙訪問
- 當圖片無法載入時顯示文字

**格式：** `[菜名] - [分類]`
- 例：`照燒雞腿 - 日式燒烤`
- 例：`雞腿蔥肉串燒 - 日式炭火燒烤`

## ⚡ 圖片效能優化

### Lazy Loading
所有圖片已加入 `loading="lazy"` 屬性，會在接近視口時才載入。

### 圖片尺寸
- 使用適當尺寸的圖片
- 避免使用過大的圖片
- 考慮使用 WebP 格式（更小尺寸）

### 圖片 CDN
可以考慮使用 CDN 服務：
- Cloudinary
- Imgix
- Cloudflare Images

## 🔧 批次替換指令

若要一次性替換所有圖片為本地版本，可以使用以下指令：

```bash
# 創建所有需要的目錄
mkdir -p images/menu/{chicken,beef,pork,vegetable,others}
mkdir -p images/about
mkdir -p images/services

# 將照片放入對應目錄後，使用搜尋取代
# 搜尋：https://images.unsplash.com/
# 取代：images/menu/
```

## 📝 注意事項

1. **圖片版權**：確保使用的圖片有合法使用權限
2. **圖片品質**：保持一致性和專業性
3. **檔案大小**：定期檢查並優化圖片大小
4. **Alt 文字**：為每張圖片添加描述性文字
5. **SEO 優化**：圖片檔名和 alt 屬性包含關鍵字

## 🆘 需要協助？

如果需要更換圖片或有任何問題，請參考：
- SEO-CHECKLIST.md - SEO 檢查清單
- README.md - 專案說明

---

**目前網站已使用高品質的免費圖片，可立即使用！如需更換為自家照片，請參考本指南。** 📸✨
