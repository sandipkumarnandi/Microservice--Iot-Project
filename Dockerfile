FROM mhart/alpine-node:12
#FROM alpine:3.10

#ENV NODE_VERSION 12.18.3
ENV PORT 443

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
COPY tsconfig*.json /usr/src/app/
COPY tsconfig.build*.json /usr/src/app/
COPY ormconfig*.json /usr/src/app/
COPY package-lock*.json /usr/src/app/
RUN npm install

RUN npm install -g @nestjs/cli




ENV NODE_ENV=dev

# Copying source files
COPY . /usr/src/app

# Building app
#RUN npm run build
CMD nest build
EXPOSE 443

# Running the app
#CMD "npm" "run" "start"
CMD nest start