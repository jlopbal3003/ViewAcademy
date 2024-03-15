const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

var lastIndice ;

async function uploadFile(archivo) {
    var indice = uuidv4();
    const formData = new FormData();

    if (!fs.existsSync(archivo)) {
        console.error('El archivo no se encuentra en la ruta especificada.');
        return;
    }

    var file = fs.createReadStream(archivo);

    formData.append('file', file);
    formData.append('index', indice);
    formData.append('name', indice);
    formData.append('description', indice);
    formData.append('owner', indice);
    formData.append('type', 'pdf');
    formData.append('visibility', 'private');
    formData.append('modelVectorization', 'text-embedding-ada-002-1');
    formData.append('renderizarImagenes', 'false');
    formData.append('vectorizarFile', 'false');

    try {
        const response = await axios.post('https://ia-kong-dev.codingbuddy-4282826dce7d155229a320302e775459-0000.eu-de.containers.appdomain.cloud/api/plugin/any-client', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-API-KEY': 'psvardT7iO02ZXzlqNeyWOK2xfwcOxlh'
            }
        });
        console.log('Archivo subido exitosamente.');
        return response.data.content;
    } catch (error) {
        console.error('Error al subir archivo:', error.response.status);
        return (error);
    }

    lastIndice = indice;
}

async function sendConversation() {
    const requestBody = {
        "model": "gpt-35-turbo-0301",
        "uuid": indice,
        "message": {
            "role": "user",
            "content": "Te proporcionaré un trabajo de investigación sobre un tema específico, y crearás un resumen de los principales puntos y hallazgos del documento. Tu resumen debe ser conciso y debe comunicar objetiva y correctamente los puntos clave del documento. No debes incluir ninguna opinión o interpretación personal en tu resumen, sino centrarte en presentar objetivamente la información del documento. Tu resumen debe estar escrito con tus propias palabras y no debe incluir citas directas del documento. Por favor, asegúrate de que tu resumen sea claro, conciso y refleje correctamente el contenido del documento original."
        },
        "index": lastIndice,
        "vectorization_model": "text-embedding-ada-002-1",
        "temperature": 0.05,
        "origin": "escueladata",
        "tokens": 1000,
        "folder": "root",
        "account": "WatsonX-VN",
        "user": "prueba@gmail.com",
        "prompt": "Resumen de documento",
    };

    try {
        const response = await axios.post('https://ia-kong-dev.codingbuddy-4282826dce7d155229a320302e775459-0000.eu-de.containers.appdomain.cloud/aigen/llm/openai/rag/clients', requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': 'psvardT7iO02ZXzlqNeyWOK2xfwcOxlh'
            }
        });
        console.log('Solicitud de conversación enviada exitosamente.');
        return response.data;
    } catch (error) {
        console.error('Error al enviar la solicitud de conversación:', error.response.status);
        return Promise.reject(error);
    }
}

module.exports = { uploadFile, sendConversation };