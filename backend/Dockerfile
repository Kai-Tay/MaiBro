FROM node:20-alpine

# Install tzdata package to handle timezones
RUN apk add --no-cache tzdata

# Set the timezone to Singapore
ENV TZ=Asia/Singapore

# Install Python and build tools
RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

EXPOSE 8000

CMD ["node", "index.js"]

