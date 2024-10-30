FROM node:18-slim

ENV SERVER_RUN_MODE=DOCKERIZED

ENV AUTH_DB_NAME=oauth

ENV PORT=5000

RUN apt-get update \
    && apt-get install -y ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/oauth-server/

COPY src/ ./src/
COPY src/package*.json ./
COPY views/ ./views/

#COPY views/ views/

RUN npm install --omit=dev

CMD [ "node", "./src/index.js" ]
