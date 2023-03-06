FROM node:14-alpine AS development

ENV NODE_ENV development
USER node

WORKDIR /home/server

COPY --chown=node:node ./package*.json .

RUN npm install 

COPY --chown=node:node . .

EXPOSE $BACKEND_PORT

RUN npm run build

FROM node:14-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /home/server

COPY ./package*.json .

RUN npm install --only=production  

COPY . .

COPY --from=development /home/server/dist ./dist

EXPOSE $BACKEND_PORT

CMD ["node", "dist/main"]