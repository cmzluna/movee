FROM node:14-alpine AS development
ENV NODE_ENV development
USER node

WORKDIR /home/app

COPY --chown=node:node ./package*.json .

RUN npm i

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "start"]
