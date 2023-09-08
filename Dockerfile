# Base image
FROM node:lts-bookworm-slim AS base

# Install pnpm with corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Enable `pnpm add --global` on Alpine Linux by setting
# home location environment variable to a location already in $PATH
# https://github.com/pnpm/pnpm/issues/784#issuecomment-1518582235
ENV PNPM_HOME=/usr/local/bin

# We want to install all dependencies and build 
# our project separately from production image.
FROM base AS build

# Register global packages
RUN pnpm add --global rimraf@latest

WORKDIR /app

COPY . .

# We install all dependencies in build
# image and compile our project
RUN pnpm i
RUN pnpm compile

# We want to install only required dependencies
# and run our project
FROM base AS final

# Copy project build and dependencies
COPY --from=build /app/dist /app/dist
COPY --from=build /app/package*.json /app
COPY --from=build /app/ecosystem*.js /app

WORKDIR /app
RUN pnpm i -g pm2@latest
RUN pnpm i --prod 

CMD ["pm2-runtime", "start", "ecosystem.config.js"]