# Dockerfile para el servicio front (Frontend)
FROM node:latest

# Directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY ./AsistenteEscolar/package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY ./AsistenteEscolar .

# Puerto expuesto
EXPOSE 4200

# Comando por defecto
CMD ["npm", "start"]
