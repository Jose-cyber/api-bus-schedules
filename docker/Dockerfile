FROM node:latest
WORKDIR /usr/src/app
COPY src/* .
RUN npm install
COPY --chown=node:node . /usr/src/app
#USER node
CMD ["node", "/usr/src/app/src/index.js"]