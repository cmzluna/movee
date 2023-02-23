FROM node:14-alpine AS development

ENV NODE_ENV development
USER node

WORKDIR /home/server

COPY ./backend/package*.json .

RUN npm i 

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start:dev"]