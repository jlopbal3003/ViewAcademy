const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const URL = "https://ia-kong-dev.codingbuddy-4282826dce7d155229a320302e775459-0000.eu-de.containers.appdomain.cloud/api/plugin/any-client";
const URLDocumental = "https://ia-kong-dev.codingbuddy-4282826dce7d155229a320302e775459-0000.eu-de.containers.appdomain.cloud/aigen/llm/openai/rag/clients";

// Exportar los métodos

async function llamadaSubirDocumento(file) {
    // Crear instancia de FormData
    const formData = new FormData();

    // Agregar el archivo y el índice al FormData
    formData.append('file', fs.createReadStream(file));
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
                ...formData.getHeaders(),
                'X-API-KEY': 'psvardT7iO02ZXzlqNeyWOK2xfwcOxlh'
            },
        });

        // Imprimir la respuesta
        llamadaSeleccionarAlumnoAleatorio();
    } catch (error) {
        console.error('Error al hacer la llamada:', error);
    }
}

// Función para llamar a la API
async function llamadaSeleccionarAlumnoAleatorio() {

    try {
        const response = await axios.post(URLDocumental, {
            model: "gpt-35-turbo-0301",
            uuid: "agdgs-24awr-22dfasswf",
            message: {
                role: "user",
                content: "Elige de forma aleatoria 1 alumno indicando su nombre y apellidos (si tiene) de los que hay dentro del documento que se te ha aportado anteriormente y me respondas sólo con el alumno que has seleccionado"
            },
            index: "5a2c55a9-0bf9-48f3-85d3-877a99d4895e",
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

module.exports = { llamadaSubirDocumento, llamadaSeleccionarAlumnoAleatorio };
