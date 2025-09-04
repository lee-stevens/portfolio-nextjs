#!/bin/bash
set -e

# Always run from repo root
cd "$(dirname "$0")/.."

echo "🔄 Pulling latest image from GHCR..."
docker compose pull

echo "🚀 Restarting services..."
docker compose up -d

echo "✅ Deployment complete!"
docker ps
