#!/bin/sh
set -xe
if [ "$APP_ENV" = 'dev' ]; then
    yarn install
    exec yarn start
else
    git pull origin && yarn install && yarn build && exec yarn start
fi