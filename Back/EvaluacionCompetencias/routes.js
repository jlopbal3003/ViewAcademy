// Importar Express
const express = require('express');

// Importar los métodos del otro archivo
const { llamadaSubirDocumento, llamadaPreguntaDocumento } = require('./app.js');

// Crear una instancia de la aplicación Express
const app = express();

// Definir una ruta
app.get('/', async (req, res) => {
    try {
        const respuesta = await llamadaPreguntaDocumento();
        res.json({ evaluacion: respuesta });
    } catch (error) {
        console.error("Error al hacer la llamada:", error);
        res.status(500).json({ error: "Hubo un error al obtener la pregunta del documento." });
    }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('El servidor está corriendo en http://localhost:3000');
});
