FROM node:12-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["node", "server.js"]
EXPOSE 5000