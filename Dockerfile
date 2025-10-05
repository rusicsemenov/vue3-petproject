# STAGE 1 - Build the app

FROM node:23-alpine AS build

# Set the working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy only the files needed for installing dependencies
COPY package.json .
COPY pnpm-lock.yaml .

# Install all dependencies (including devDependencies for build)
RUN pnpm install --frozen-lockfile

# Copy the rest of the source files
COPY . .

# Build the app
RUN pnpm build

# STAGE 2 - Create the final image
FROM node:23-alpine AS final

# Set the working directory
WORKDIR /app

# Install pnpm and vite globally (vite is needed for 'vite preview')
RUN npm install -g pnpm vite

# Copy only the built output and necessary files
COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./
COPY --from=build /app/pnpm-lock.yaml ./

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile

# Expose the port
EXPOSE 4173

# Start the app
CMD ["pnpm", "preview", "--host"]

