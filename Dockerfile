# stage 0
FROM node:10.16.0-alpine as build-stage

RUN mkdir /app
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN npm install -g yarn
RUN yarn install

COPY . /app
RUN yarn build

# stage 1
FROM nginx:1.15.2-alpine
COPY --from=build-stage /app/build/ /var/www
COPY ./build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]