FROM node:latest

WORKDIR /app
RUN npm i -g pm2
RUN npm i -g pnpm
RUN npm i -g rimraf

ENV app_basePath=/bugatos

COPY package.json ./
COPY package-lock.json ./
COPY pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
  pnpm install --frozen-lockfile

COPY . .

RUN pnpm compile

CMD ["pm2-runtime", "start", "dist/main.js"]