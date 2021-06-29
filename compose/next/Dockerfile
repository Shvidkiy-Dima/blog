FROM node:alpine

WORKDIR /app

ENV NODE_ENV production

COPY src ./

RUN npm install

EXPOSE 3000


COPY ./compose/next/start.sh /start.sh
COPY ./compose/check_conn.py /app/check_conn.py

RUN chmod +x /start.sh

ENTRYPOINT ["/start.sh"]

