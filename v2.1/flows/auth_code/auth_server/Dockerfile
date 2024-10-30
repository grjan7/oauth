FROM node:18-slim

ENV SERVER_RUN_MODE=DOCKERIZED

ENV SECRET_KEY=asodsdm6daa1z541d45ds2dss87a2vfd3dgd25chjnids5sdndd67dbas91asd2dsj2f0dsd0c8wwsd2fssa2zd55sgd52ads82zxdzcsc

ENV AUTH_DB_URI=mongodb+srv://janagr7:KSs0bARy5eE068SK@cluster0.xbebh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

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
