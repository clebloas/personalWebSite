FROM node:latest

RUN npm install -g node-static

ADD code/** .

EXPOSE 8888

ENTRYPOINT ["public",  "-a", "0.0.0.0", "-p", "8888"]
