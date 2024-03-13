const express = require('express');
const app = express();

const rutas = require('./rutas');

app.use('/', rutas);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el ${PORT}`);
});