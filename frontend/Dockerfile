FROM node:14-alpine AS development
ENV NODE_ENV development
USER node

WORKDIR /home/app

COPY ./frontend/package*.json .

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
