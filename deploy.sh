#!/usr/bin/env sh

set -e

npm run build

cd dist

git intit
git add -A
git commit -m 'New Deployment'
git push -f github.com/AndrPerep/Python-Cards.git master:gh-pages

cd -
