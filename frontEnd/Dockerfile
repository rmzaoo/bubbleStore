FROM node:15.12.0

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "dev" ]