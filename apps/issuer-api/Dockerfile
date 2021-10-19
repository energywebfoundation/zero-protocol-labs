FROM node:lts-alpine
WORKDIR /app
RUN yarn global add ts-node typescript
COPY ./package.json .
RUN yarn install
COPY . .

CMD node ./main.js
