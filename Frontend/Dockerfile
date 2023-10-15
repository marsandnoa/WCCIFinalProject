FROM node:lts

WORKDIR /app

COPY package-lock.json ./
COPY package*.json ./


COPY . .

RUN npm install

RUN npm run build

EXPOSE 6001

CMD ["npm", "run", "dev"]
