# Step 1: Build the React App (Production Build)
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if it exists) for dependency installation
COPY package*.json ./

# Install dependencies (both regular and dev dependencies)
RUN npm install

# Copy the entire project into the container
COPY . .

# Build the React app in production mode
RUN npm run build

# Step 2: Set up Nginx to serve the React app
FROM nginx:alpine

# Set the working directory in the container to host the built files
WORKDIR /usr/share/nginx/html

# Copy the production build from the previous image to the correct location in Nginx
COPY --from=build /app/build .

# Ensure nginx has permission to write to the cache, log, and run directories
RUN mkdir -p /var/cache/nginx /var/log/nginx /var/run/nginx && \
    chown -R nginx:nginx /var/cache/nginx /var/log/nginx /var/run/nginx && \
    chmod -R 755 /var/cache/nginx /var/log/nginx /var/run/nginx

# **Avoid running as 'nginx' user during build time**. We'll run Nginx as 'nginx' later
USER root

# Expose port 5575
EXPOSE 5575

# Ensure nginx runs in the foreground, and does not exit
CMD ["nginx", "-g", "daemon off;"]