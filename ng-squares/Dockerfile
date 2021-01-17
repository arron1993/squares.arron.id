FROM node:latest as angular_build

RUN npm install -g @angular/cli


RUN mkdir /ng-squares
COPY ./package.json /ng-squares

WORKDIR /ng-squares
RUN npm install
RUN npx ngcc

COPY ./src /ng-squares/src
COPY ./dist /ng-squares/dist
COPY ./angular.json /ng-squares
COPY ./tsconfig.app.json /ng-squares
COPY ./tsconfig.json /ng-squares
# RUN npm run build-prod

FROM nginx:latest

COPY nginx.conf /etc/nginx  
COPY --from=angular_build /ng-squares/dist /usr/share/nginx/html

