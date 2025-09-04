# portfolio-nextjs

A 2025 portfolio designed to be self-hosted and served publically.

## CI/CD Pipeline using Docker & Github Container Registry

1. Install Git
2. Install Docker
3. Have Docker login to the GHCR using the Github username & PAT

``` SHELL
# Have Docker login to GHCR using your github username & PAT
docker login ghcr.io -u <user> --password-stdin
# Have docker build a local image with a tag of :latest
docker build -t ghcr.io/lee-stevens/portfolio-nextjs:latest ./portfolio
# Have docker push the portfolio:latest image to ghcr
docker push ghcr.io/lee-stevens/portfolio-nextjs:latest
# On the host, setup a compose.yaml (Or in this project, just uncomment the localhosted one)
# Then CD into the project root next to the compose.yaml
# Pull the image from ghcr and then compose
cd /to/the/project/root
docker compose pull
dokcer compose up -d
```
