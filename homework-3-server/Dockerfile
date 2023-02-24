FROM node:18

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm i

COPY . .

EXPOSE 8000

COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]
