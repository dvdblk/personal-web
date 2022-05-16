FROM node:18-alpine

WORKDIR /app
# node modules to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# deps
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@5.0.1 -g

COPY . ./
CMD ["npm", "start"]
