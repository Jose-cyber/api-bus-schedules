FROM node:slim
WORKDIR /usr/app
COPY package*.json ./
COPY knexfile.js ./
COPY src/ ./src/
RUN npm install --ignore-scripts
ENV TZ America/Sao_Paulo
USER node
CMD [ "npm", "run", "prd" ]