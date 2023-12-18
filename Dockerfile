FROM node:18-alpine

# node modules to $PATH
WORKDIR /app
ENV PATH /app/node_modules/.bin:${PATH}

# deps
COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./
CMD ["npm", "start"]
