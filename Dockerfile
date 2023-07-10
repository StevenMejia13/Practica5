FROM node:18-alpine

WORKDIR /var/www

COPY package.json ./

RUN yarn install

COPY . .

ENV PORT=5000
          
CMD [ "yarn", "dist/main"]
