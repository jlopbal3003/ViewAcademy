const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


var indice = uuidv4(); // Genera un nombre único aleatorio

async function uploadFile3(archivo) {

    const rutaAbsoluta = path.resolve(archivo); // Obtiene la ruta absoluta del archivo

    if (!fs.existsSync(archivo)) {
        console.error('El archivo no se encuentra en la ruta especificada.');
        return;
    }

    const file = fs.createReadStream(rutaAbsoluta);

    const formData = {
        file: file,
        index: indice,
        name: indice,
        description: 'indice',
        owner: 'indice',
        type: 'pdf',
        visibility: 'private',
        modelVectorization: 'text-embedding-ada-002-1',
        renderizarImagenes: 'false',
        vectorizarFile: 'false'
    };

    try {
        const response = await axios.post('https://ia-kong-dev.codingbuddy-4282826dce7d155229a320302e775459-0000.eu-de.containers.appdomain.cloud/api/plugin/any-client', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-API-KEY': 'psvardT7iO02ZXzlqNeyWOK2xfwcOxlh'
            }
        });
        respuesta = await sendConversation2();
        respuesta = respuesta.slice(4);
        return respuesta; 
    } catch (error) {
        console.error('Error al subir archivo:', error.response);
        return Promise.reject(error);
    }
}

async function sendConversation2() {
    var requestBody = {
        "model": "gpt-35-turbo-0301",
        "uuid": indice,
        "message": {
            "role": "user",
            "content": "Elige de forma aleatoria 1 alumno indicando su nombre y apellidos (si tiene) de los que hay dentro del documento que se te ha aportado anteriormente y me respondas sólo con el alumno que has seleccionado"
        },
        "index": "pruebadatosderelatos",
        "vectorization_model": "text-embedding-ada-002-1",
        "temperature": 0.05,
        "origin": "escueladata",
        "tokens": 1000,
        "folder": "root",
        "account": "WatsonX-VN",
        "user": "prueba6@gmail.com"
    };

    try {
        var response = await axios.post('https://ia-kong-dev.codingbuddy-4282826dce7d155229a320302e775459-0000.eu-de.containers.appdomain.cloud/aigen/llm/openai/rag/clients', requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': 'psvardT7iO02ZXzlqNeyWOK2xfwcOxlh'
            }
        });
        return response.data.content; 
    } catch (error) {
        console.error('Error al enviar la solicitud de conversación:', error.response.status);
        return Promise.reject(error);
    }
}

module.exports = { uploadFile3};
