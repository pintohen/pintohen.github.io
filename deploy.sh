cp index-dev.html index.html

npm run build

cp index-prod.html index.html

git add .
git commit -m "build: deploy commit at $(date)"
git push origin main