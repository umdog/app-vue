#!/bin/bash
npm run build
cp -rf ./dist/* /by_chun/public/
rm -rf imdog/src/app/*
cp -rf ./dist/* imdog/src/app/
cd imdog/
git add .
git commit -m "update"
nginx -s reload
git push
