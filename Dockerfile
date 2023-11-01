FROM node:20-alpine

WORKDIR /opt/web

COPY . .
RUN npm i

VOLUME /opt/web

CMD ["npx", "@11ty/eleventy", "--serve"]
