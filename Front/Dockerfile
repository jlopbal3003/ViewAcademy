FROM node:latest

WORKDIR /app

COPY . .

# Cambiamos al directorio AsistenteEscolar
WORKDIR /app/AsistenteEscolar

RUN npm install

EXPOSE 4200

CMD ["ng", "serve"]
