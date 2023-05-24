FROM node:latest
WORKDIR /usr/src/app
COPY src/ .
RUN npm install --ignore-scripts
USER node
CMD ["npm", "run", "dev"]