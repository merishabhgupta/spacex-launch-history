# common base image for development and 
FROM node:12.18.3 AS builder
WORKDIR /app

# dev image contains everything needed for testing, development and building
FROM base AS development
COPY . /app

# install all dependencies and add source code
RUN npm install
RUN npm install -g @angular/cli@8.1.3

# builder runs unit tests and linter, then builds production code 
FROM development as builder
RUN npm run build:ssr --prod --output-path=dist

# release includes bare minimum required to run the app, copied from builder
FROM base AS release
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json /app/

ENV NODE_ENV "production"
ENV PORT 3000

EXPOSE 3000
CMD ["npm", "run ", "serve:ssr"]