FROM node:12-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
ADD build ./build
COPY server.js .
COPY shopListDB.db .
EXPOSE 8080
CMD ["node", "server.js"]