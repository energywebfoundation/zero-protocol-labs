FROM node:lts-alpine
ENV NODE_ENV=production
ENV FILES_STORAGE=/uploaded-files
VOLUME ["/tmp"]
WORKDIR /app
RUN yarn global add prisma@3.4.1
COPY ./package.json .
RUN yarn install
COPY . .
RUN prisma generate || exit 0 # TODO: allow this to crash after schema is defined
RUN rm -rf /tmp/*

CMD node ./main.js
