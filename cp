#!/bin/bash
npm run build
cp -rf ./dist/* /by_chun/public/
nginx -s reload
