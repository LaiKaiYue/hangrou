#!/bin/bash

# 夯肉 HANGROU - ngrok 快速啟動腳本

echo "🔥 正在啟動夯肉網站的外部訪問..."
echo ""

# 檢查 ngrok 是否安裝
if ! command -v ngrok &> /dev/null; then
    echo "❌ ngrok 未安裝"
    echo ""
    echo "請先安裝 ngrok："
    echo "  macOS: brew install ngrok"
    echo "  或訪問: https://ngrok.com/download"
    echo ""
    exit 1
fi

# 顯示當前目錄
echo "📁 專案目錄: $(pwd)"
echo ""

# 啟動本地服務器
echo "🚀 啟動本地服務器於 http://localhost:8000 ..."
python3 -m http.server 8000 &
SERVER_PID=$!

# 等待服務器啟動
sleep 2

# 啟動 ngrok
echo ""
echo "🌐 啟動 ngrok 隧道..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
ngrok http 8000

# 清理：當 ngrok 關閉時也關閉本地服務器
kill $SERVER_PID
