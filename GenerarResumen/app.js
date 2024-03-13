const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

var indice = uuidv4(); // Genera un nombre único aleatorio

async function uploadFile(archivo) {
    const formData = new FormData();
    
    if (!fs.existsSync(archivo)) {
        console.error('El archivo no se encuentra en la ruta especificada.');
        return;
    }
    
    const file = fs.createReadStream(archivo);
    
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
        return response.data; 
    } catch (error) {
        console.error('Error al subir archivo:', error.response.status);
        return Promise.reject(error);
    }
}

async function sendConversation() {
    const requestBody = {
        "model": "gpt-35-turbo-0301",
        "uuid": indice,
        "message": {
            "role": "user",
            "content": "Imagina que eres un experto haciendo resúmenes detallados y largos, hazme un resumen."
        },
        "index": indice,
        "vectorization_model": "text-embedding-ada-002-1",
        "temperature": 0.05,
        "origin": "escueladata",
        "tokens": 1000,
        "folder": "root",
        "account": "WatsonX-VN",
        "user": "prueba@gmail.com",
        "prompt": "Eres bueno haciendo resúmenes."
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

(async () => {
    //Cambiar url del archivo lo demás se deja igual(en principio)
    var archivo = "C:\\Users\\anuar\\Desktop\\AsistenteEscolar\\GenerarResumen\\Archivos\\prueba.pdf";
    await uploadFile(archivo);
    const conversationResponse = await sendConversation();
    const cleanedContent = conversationResponse.content.replace(/^AI##/, ''); 
    console.log('\n', cleanedContent);
})();