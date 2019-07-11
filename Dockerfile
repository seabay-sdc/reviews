FROM node:10

WORKDIR /desktop/FEC/reviewsNew

COPY package*.json ./

RUN npm install

ENV PORT=8080

COPY . .

CMD [ "node", "server/server.js" ]

EXPOSE 8080