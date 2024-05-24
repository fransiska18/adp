# Use the Docker syntax for the Dockerfile version
# syntax=docker/dockerfile:1

# Define the Node.js version as a build argument
ARG NODE_VERSION=9.11.2

# Use the specified Node.js version with Alpine Linux as the base image
FROM node:${NODE_VERSION}-alpine

# Set the Node.js environment to production by default
ENV NODE_ENV=production

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application source files into the container
COPY . .

# Run the application as a non-root user
USER node

# Expose the port that the application listens on
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
