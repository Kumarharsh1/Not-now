# ✅ Use official Node image
FROM node:18

# ✅ Set working directory
WORKDIR /app

# ✅ Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# ✅ Copy the rest of your frontend code
COPY . .

# ✅ Build your React app
RUN npm run build

# ✅ Serve the build folder (optional if you're using static hosting)
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# ✅ Expose port (optional)
EXPOSE 3000
