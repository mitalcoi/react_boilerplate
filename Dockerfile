FROM node:7-slim
RUN apt-get update && apt-get install -y git-core && apt-get clean
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN yarn install
CMD ["yarn", "start"]
COPY docker/start.sh /usr/local/bin/docker-app-start

RUN chmod +x /usr/local/bin/docker-app-start

CMD ["docker-app-start"]