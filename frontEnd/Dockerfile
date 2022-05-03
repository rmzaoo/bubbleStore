FROM node:15.12.0 as build-frontend

WORKDIR /app
COPY . /app
RUN yarn
RUN yarn build

FROM nginx:1.12-alpine
COPY --from=build-frontend /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
