const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const rutas = require('./rutas');

app.use('/', rutas);
app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;
app.options('*', cors({
    allowedHeaders: ['Content-Type'],
  }));

app.listen(PORT, () => {
    console.log(`Servidor disponible en http://localhost:${PORT}`);
});