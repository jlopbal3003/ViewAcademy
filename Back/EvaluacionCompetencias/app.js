const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const URL = "https://ia-kong-dev.codingbuddy-4282826dce7d155229a320302e775459-0000.eu-de.containers.appdomain.cloud/api/plugin/any-client";
const URLDocumental = "https://ia-kong-dev.codingbuddy-4282826dce7d155229a320302e775459-0000.eu-de.containers.appdomain.cloud/aigen/llm/openai/rag/clients";

// Exportar los métodos
module.exports = { llamadaSubirDocumento, llamadaPreguntaDocumento };

async function llamadaSubirDocumento() {
    // Crear instancia de FormData
    const formData = new FormData();

    // Agregar el archivo y el índice al FormData
    formData.append('file', fs.createReadStream('./NotasAlumnos.pdf'));
    formData.append('index', 'prueba2dedatosdealumnos');
    formData.append('name', 'pruebadatosdealumnos');
    formData.append('description', 'pruebadatosdealumnos');
    formData.append('owner', '');
    formData.append('type', 'pdf');
    formData.append('visibility', 'private');
    formData.append('modelVectorization', 'text-embedding-ada-002-1');
    formData.append('renderizarImagenes', 'false');
    formData.append('vectorizarFile', 'false');

    try {
        // Hacer la llamada usando axios
        const response = await axios.post(URL, formData, {
            headers: {
                ...formData.getHeaders(), // Obtener los encabezados de FormData
                'X-API-KEY': 'psvardT7iO02ZXzlqNeyWOK2xfwcOxlh' // Agregar el encabezado con la API key
            },
        });

        // Imprimir la respuesta
        llamadaPreguntaDocumento();
    } catch (error) {
        // Manejar errores
        console.error('Error al hacer la llamada:', error);
    }
}

// Función para llamar a la API
async function llamadaPreguntaDocumento() {
    const data = {
        model: "gpt-35-turbo-0301",
        uuid: "agdgs-24awr-22dfasswf",
        message: {
            role: "user",
            content: "Eres un asistente escolar que procesa datos académicos de alumnos. A partir de los siguientes datos de alumnos, genera una descripción detallada para cada uno de ellos explicando en qué aspectos van bien y en cuáles tienen que trabajar más"
        },
        index: "5a2c55a9-0bf9-48f3-85d3-877a99d4895e",
        vectorization_model: "text-embedding-ada-002-1",
        temperature: 0,
        origin: "escueladata",
        user: ""
    };

    try {
        const response = await fetch(URLDocumental, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': 'psvardT7iO02ZXzlqNeyWOK2xfwcOxlh'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('La llamada a la API no fue exitosa');
        }

        const responseData = await response.json();
        const respuesta = responseData.content.substring(4);

        return respuesta;

    } catch (error) {
        throw error;
    }
}

// Llamar a la función para enviar la llamada
llamadaSubirDocumento();
