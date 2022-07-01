FROM node:alpine

WORKDIR /server

COPY ./server/package.json /server/package.json

RUN npm install
# RUN npm audit fix

COPY ./server /server