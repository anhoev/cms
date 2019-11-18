FROM node:10 as intermediate
WORKDIR /home/giga-office
RUN mkdir -p /home/giga-office/storage
COPY package*.json ecosystem-dev.json ./
RUN npm install --production
COPY . .
WORKDIR /home/giga-office/backoffice
RUN npm install
RUN npm run build:production
WORKDIR /home/giga-office
RUN rm -rf ./backoffice

FROM node:10
WORKDIR /home/giga-office
COPY --from=intermediate /home/giga-office /home/giga-office
EXPOSE 8888
ENTRYPOINT ["/bin/sh", "./scripts/container-startup-script.sh"]