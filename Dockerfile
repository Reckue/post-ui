### STAGE 1: Build ###
FROM node:lts-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod


### STAGE 2: Run ###
FROM nginxinc/nginx-unprivileged
COPY ./config/nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY /dist/post-ui /usr/share/nginx/html
COPY --from=build app/dist/post-ui /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
