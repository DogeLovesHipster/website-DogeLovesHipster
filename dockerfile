# Step 1: Use the official Node.js 18 image as a builder stage.
FROM node:18 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's source code
COPY . .

# Build the application
RUN npm run build

# Step 2: Use the Nginx image to serve the static content
FROM nginx:stable-alpine

# Copy the built assets from the builder stage to the nginx server directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Set Nginx to listen on the appropriate port
RUN sed -i 's/listen  .*/listen 8080;/g' /etc/nginx/conf.d/default.conf

# Expose the port nginx is reachable on
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
