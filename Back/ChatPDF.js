const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

var indice = uuidv4(); // Genera un nombre único aleatorio

async function uploadFile(archivo) {

    if (!fs.existsSync(archivo)) {
        console.error('El archivo no se encuentra en la ruta especificada.');
        return;
    }

    const file = fs.createReadStream(archivo);

    const formData = {
        file: file,
        index: indice,
        name: indice,
        description: indice,
        owner: indice,
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
        console.log('Archivo subido exitosamente.');
        return response.data;
    } catch (error) {
        console.error('Error al subir archivo:', error.response.status);
        return Promise.reject(error);
    }
}
let prompt = "Tienes un rol de profesor e intentarás explicar lo mejor posible cualquier pregunta sobre el contexto proporcionado. Si es una pregunta fuera de contexto o lejos del contexcto dirás no está relacionada."

async function sendConversation(mensaje) {
    const requestBody = {
        "model": "gpt-35-turbo-0301",
        "uuid": indice,
        "message": {
            "role": "user",
            "content": prompt + "\n" + mensaje
        },
        "index": indice,
        "vectorization_model": "text-embedding-ada-002-1",
        "temperature": 0.05,
        "origin": "escueladata",
        "tokens": 1000,
        "folder": "root",
        "account": "WatsonX-VN",
        "user": "prueba@gmail.com",
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
