FROM bbbdevteam9x/pm2:v1
LABEL author="manh.nguyen@vmodev.com"

RUN mkdir -p /home/giga-office \
  && mkdir -p /home/giga-office/storage
WORKDIR /home/giga-office

COPY package.json yarn.lock ecosystem-dev.json ./
RUN yarn install --production \
  && yarn cache clean \
  && node-prune

# execute plugin
RUN mkdir -p /home/giga-office/backend/mobile/plugins/digital-signage-plugin
COPY backend/mobile/plugins/digital-signage-plugin/package.json backend/mobile/plugins/digital-signage-plugin/package.json
RUN cd backend/mobile/plugins/digital-signage-plugin \
  && yarn install

COPY ./ ./
EXPOSE 8888

ENTRYPOINT [ "pm2-runtime","start","ecosystem-dev.json" ]
