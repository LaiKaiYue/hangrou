#!/bin/bash

echo "🌐 使用 Cloudflare Tunnel 創建公開連結..."
echo ""

# 安装 cloudflared（如果還沒安裝）
if ! command -v cloudflared &> /dev/null; then
    echo "📦 正在安裝 cloudflared..."
    brew install cloudflared
fi

echo "🚀 啟動 tunnel..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
cloudflared tunnel --url http://localhost:8000
