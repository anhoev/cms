#!/bin/sh
echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf && sysctl -p
GITBOT_ACCESS_TOKEN=$(cat ./gitbot)
rm ./gitbot
git config --global url."https://${GITBOT_ACCESS_TOKEN}:@github.com/".insteadOf "https://github.com/"
node backend/use/index.js --config=./config/config.json --mode=safemode
