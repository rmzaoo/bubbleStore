FROM node:15.12.0 as build-frontend

COPY . /app
WORKDIR /app
RUN yarn
RUN yarn build

FROM nginx:1.15

COPY --from=build-frontend /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
