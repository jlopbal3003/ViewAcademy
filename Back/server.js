const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {llamadaAsistenteApiPost} = require('./llamada');
const app = express();
const rutas = require('./rutas');
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.options('*', cors({
    allowedHeaders: ['Content-Type'],
  }));

app.use('/', rutas);

app.listen(PORT, () => {
    console.log(`Servidor disponible en http://localhost:${PORT}`);
});