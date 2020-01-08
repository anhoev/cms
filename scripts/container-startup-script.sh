#!/bin/sh
echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf && sysctl -p
GITBOT_ACCESS_TOKEN=$(cat ./gitbot-access-token)
rm ./gitbot-access-token
git config --global url."https://${GITBOT_ACCESS_TOKEN}:@github.com/".insteadOf "https://github.com/"
git config --global user.email "gitbot@gigasource.io"
git config --global user.name "Gigasource Gitbot"
node backend/use/index.js --config=./config/config.json
