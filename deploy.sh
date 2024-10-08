cp index-dev.html index.html # build with dev

npm run build

cp index-prod.html index.html # prepare prod for commit

git add .
git commit -m "build: deploy commit at $(date)"
git push origin main

## backup dir format ##
backup_dir=$(date)
echo "Deploy routine executed at: ${backup_dir}" >> "deploy.log"

cp index-dev.html index.html # return to dev