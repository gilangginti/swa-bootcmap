#Here we will use node as the base image.
FROM node:16.3.0-alpine

#create a working directory inside the container.
WORKDIR /app

#copy the files from the host to the container.
COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent

COPY . .

EXPOSE 3000

#use nodemon to run the react application using npm.
CMD ["npm", "run", "start-watch"]
