### STAGE 1: Build ###
FROM node:current-alpine3.16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
RUN npm run build --prod


### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8015:80