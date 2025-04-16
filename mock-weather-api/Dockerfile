FROM node:18

WORKDIR /app

COPY index.js .

RUN npm init -y && npm install express

EXPOSE 4000

CMD ["node", "index.js"]