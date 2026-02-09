#!/bin/bash

# 夯肉 HANGROU - GitHub Pages 部署腳本

echo "🚀 開始部署到 GitHub Pages..."
echo ""

# 檢查是否在正確的目錄
if [ ! -f "index.html" ]; then
    echo "❌ 錯誤：請在專案根目錄執行此腳本"
    exit 1
fi

# GitHub 用戶名和倉庫名
GITHUB_USERNAME="LaiKaiYue"
REPO_NAME="hangrou-website"

echo "📋 部署資訊："
echo "   GitHub 用戶: $GITHUB_USERNAME"
echo "   倉庫名稱: $REPO_NAME"
echo "   預期 URL: https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
echo ""

# 檢查是否已添加遠程倉庫
if git remote get-url origin > /dev/null 2>&1; then
    echo "✅ 遠程倉庫已存在"
    git remote set-url origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git
else
    echo "📌 添加遠程倉庫..."
    git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git
fi

echo ""
echo "🚀 推送到 GitHub..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 推送代碼
git branch -M main
git push -u origin main

echo ""
echo "✅ 推送完成！"
echo ""
echo "📝 下一步："
echo "   1. 訪問: https://github.com/$GITHUB_USERNAME/$REPO_NAME/settings/pages"
echo "   2. Source 選擇: Deploy from a branch"
echo "   3. Branch 選擇: main / (root)"
echo "   4. 點擊 Save"
echo "   5. 等待 1-2 分鐘"
echo ""
echo "🌐 您的網站將在以下地址可用："
echo "   https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
echo ""
