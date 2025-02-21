# Use a Node.js image to build the app
FROM node:18-alpine AS builder

WORKDIR /

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Copy package.json and install dependencies
RUN pnpm install

# Copy the entire app and build it
COPY . .
RUN pnpm build

# Use a lightweight web server to serve the built files
FROM nginx:1.23-alpine

# Copy build output to Nginx's default static file directory
COPY --from=builder dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
