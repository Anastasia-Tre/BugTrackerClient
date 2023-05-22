# Use an official Node.js LTS (Long Term Support) as the base image
FROM node:lts-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm ci --only=production

# Copy the remaining app files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server as the base image
FROM nginx:alpine

# Copy the built React app files to the web server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start the Nginx web server
CMD ["nginx", "-g", "daemon off;"]
