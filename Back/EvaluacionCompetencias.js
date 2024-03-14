const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const { generarUuid } = require('./utils');

const URL = "https://ia-kong-dev.codingbuddy-4282826dce7d155229a320302e775459-0000.eu-de.containers.appdomain.cloud/api/plugin/any-client";
const URLDocumental = "https://ia-kong-dev.codingbuddy-4282826dce7d155229a320302e775459-0000.eu-de.containers.appdomain.cloud/aigen/llm/openai/rag/clients";

// Exportar los métodos
let uuid ;
async function llamadaSubirDocumento(file) {
    uuid = generarUuid()
    // Crear instancia de FormData
    const formData = new FormData();

    // Agregar el archivo y el índice al FormData
    formData.append('file', fs.createReadStream(file));
    formData.append('index', 'index-evaluaciondecompetencias');
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
                ...formData.getHeaders(),
                'X-API-KEY': 'psvardT7iO02ZXzlqNeyWOK2xfwcOxlh'
            },
        });

        // Imprimir la respuesta
        llamadaPreguntaDocumento();
    } catch (error) {
        console.error('Error al hacer la llamada:', error);
    }
}

// Función para llamar a la API
async function llamadaPreguntaDocumento() {

    try {
        const response = await axios.post(URLDocumental, {
            model: "gpt-35-turbo-0301",
            uuid: generarUuid(),
            message: {
                role: "user",
                content: "Eres un asistente escolar que procesa datos académicos de alumnos. A partir de los siguientes datos de alumnos,genera una descripción detallada para cada uno de ellos explicando en qué aspectos van bien y en cuáles tienen que trabajar más.Tu respuesta tiene que ser detallada y ordenada.Un ejemplo de tu respuesta sería :  El alumno Juan Pérez tiene un buen rendimiento en matemáticas, pero tiene que mejorar en lengua.  El alumno María García tiene un buen rendimiento en lengua, pero tiene que mejorar en matemáticas.  El alumno Pedro López tiene un buen rendimiento en matemáticas, pero tiene que mejorar en lengua.  El alumno Ana Martínez tiene un buen rendimiento en lengua, pero tiene que mejorar en matemáticas.  El alumno Luis Sánchez tiene un buen rendimiento en matemáticas, pero tiene que mejorar en lengua.  El alumno Carmen Rodríguez tiene un buen rendimiento en lengua, pero tiene que mejorar en matemáticas."
            },
            index: "index-evaluaciondecompetencias",
            vectorization_model: "text-embedding-ada-002-1",
            temperature: 0,
            origin: "escueladata",
            user: ""
        }, {method: 'POST', headers: {'Content-Type': 'application/json', 'X-API-KEY': 'psvardT7iO02ZXzlqNeyWOK2xfwcOxlh'}});

        let respuesta = response.data.content.substring(4);
        return (respuesta)


    } catch (error) {
        throw error;
    }
}

module.exports = { llamadaSubirDocumento, llamadaPreguntaDocumento };
