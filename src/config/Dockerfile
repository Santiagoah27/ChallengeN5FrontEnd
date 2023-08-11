# Usa la imagen oficial de Node.js para construir la aplicación
FROM node:14 AS build-env
WORKDIR /app

# Instala todas las dependencias
COPY package*.json ./
RUN npm install

# Copia el proyecto y construye la aplicación
COPY . ./
RUN npm run build

# Usa la imagen oficial de Nginx para servir el frontend
FROM nginx:alpine
COPY --from=build-env /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]