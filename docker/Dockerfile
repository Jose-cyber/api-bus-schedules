FROM node:alpine
WORKDIR /usr/src/app
COPY --chown=node:node . /usr/src/app
COPY src/*  .
RUN npm install
USER NODE
CMD ["node", "index.js"]