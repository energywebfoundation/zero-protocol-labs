FROM nginx:alpine

RUN apk add --no-cache bash

WORKDIR /usr/share/nginx/html

COPY . /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY ./prod-start.sh .
RUN chmod +x ./prod-start.sh

CMD ["/bin/bash", "./prod-start.sh"]
