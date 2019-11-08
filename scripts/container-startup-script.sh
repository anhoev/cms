#!/bin/sh
echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf && sysctl -p
node backend/use/index.js --config=./config/config.json --mode=safemode