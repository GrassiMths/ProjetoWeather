FROM node:18

WORKDIR /app

COPY . .

RUN npm init -y && npm install express axios

EXPOSE 3000

CMD ["node", "app.js"]