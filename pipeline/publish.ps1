# publish.ps1
# Build and push Docker image to GitHub Container Registry (GHCR)

# --- Config ---
$User = "lee-stevens"
$Repo = "portfolio-nextjs"
$Registry = "ghcr.io"
# --------------

# Stop on first error
$ErrorActionPreference = "Stop"

# Since this script is in ./pipeline, we need to update the working directory to repo root
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$Context   = Join-Path $ScriptDir "../portfolio"

# Get current git commit hash (short form)
$Commit = git rev-parse --short HEAD

# Build image with two tags: latest and commit-specific
# -t "${Registry}/${User}/${Repo}:${Commit}" ` - We don't need each build being tagged, latest is fine
Write-Host "Building Docker image..."
docker build `
  -t "${Registry}/${User}/${Repo}:latest" `
  $Context

# Push both tags to GHCR
Write-Host "Pushing Docker images to $Registry..."
docker push "${Registry}/${User}/${Repo}:latest"
# docker push "${Registry}/${User}/${Repo}:${Commit}"

Write-Host "Done! Images pushed:"
Write-Host "   ${Registry}/${User}/${Repo}:latest"
# Write-Host "   ${Registry}/${User}/${Repo}:${Commit}"
