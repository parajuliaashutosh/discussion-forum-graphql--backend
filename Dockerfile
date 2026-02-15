# Stage 1: build stage
FROM node:alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build     # compiles TS to JS in /app/dist

# Stage 2: production stage
FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY --from=build /app/dist ./dist

EXPOSE ${PORT}

CMD ["node", "dist/server.js"]
