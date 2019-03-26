#!/bin/sh
echo '~~~~~~ Starting build front-end *Giga-Frontend* ~~~~~~~~~'
cd ../backoffice && npm i && npm run build:dev
echo '~~~~~~ Finish build front-end *Giga-Frontend* ~~~~~~~~~~~'

echo '~~~~~~ Starting build dockerfile ~~~~~~~~~~~~~~~~~~~~~~'
ENV=staging
HOST=406942070697.dkr.ecr.ap-southeast-1.amazonaws.com
IMAGE=giga-office

cd ../ && docker build --cache-from=$HOST/$IMAGE:$ENV -t $HOST/$IMAGE:$ENV -f .docker/$ENV.dockerfile .

echo '~~~~~~~~~~~~ Ending build dockerfile ~~~~~~~~~~~~~~~~~~'
