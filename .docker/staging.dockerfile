FROM bbbdevteam9x/pm2:v1
LABEL author="manh.nguyen@vmodev.com"

RUN mkdir -p /home/giga-user
WORKDIR /home/giga-user
COPY package.json yarn.lock ecosystem-dev.json ./

RUN yarn install --production \
  && yarn cache clean \
  && node-prune
COPY ./ ./
EXPOSE 8888

ENTRYPOINT [ "pm2-runtime","start","ecosystem-dev.json" ]
