FROM node:14-alpine AS development

ENV NODE_ENV development
USER node

WORKDIR /home/server

COPY --chown=node:node ./backend/package*.json /home/server/

COPY --chown=node:node ./backend/ .

RUN npm install -g @nestjs/cli

RUN npm i 

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start:dev"]