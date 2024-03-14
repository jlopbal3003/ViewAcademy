const { llamadaSubirDocumento, llamadaPreguntaDocumento } = require('./EvaluacionCompetencias.js');
const { uploadFile ,sendConversation} = require('./Resumen.js');
const { llamadaAsistenteApi, contentsByRoute, llamadaAsistenteApiPost } = require('./calls');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	  res.send('Hello World!');
});
/************************EVALUACION DE COMPETENCIAS***************************/
router.post('/upevaluacion', async (req, res) => {
    try {
        console.log("Subiendo documento...");
        const respuesta = await llamadaSubirDocumento(req.body.archivo);
        res.json({ subirDocumento: respuesta });
        console.log("Documento subido.");
    } catch (error) {
        console.error("Error al hacer la llamada:", error);
        res.status(500).json({ error: "Hubo un error al subir el documento." });
    }
});

router.get('/evaluacion', async (req, res) => {

    try {
        const respuesta = await llamadaPreguntaDocumento();
        res.json({ evaluacion: respuesta });
    } catch (error) {
        console.error("Error al hacer la llamada:", error);
        res.status(500).json({ error: "Hubo un error al obtener la pregunta del documento." });
    }
});

/*******************************resumen*****************/

router.post('/upresumen', async (req, res) => {
    const respuesta  = await uploadFile(req.body.archivo);
    res.json({ subirDocumento: respuesta });
});

router.get('/resumen', async (req, res) => {
    const apiresponse = await sendConversation();
    const cleanedContent = apiresponse.content.replace(/^AI##/, '');
    res.json({ resumen: cleanedContent });
});

/*****************SELECCIONAR ALUMNO******************/

router.post('/seleccionalumno', async (req, res) => {
    try {
        console.log("Subiendo documento...");
        const respuesta = await llamadaSubirDocumento(req.body.archivo);
        res.json({ subirDocumento: respuesta });
        console.log("Documento subido.");
    } catch (error) {
        console.error("Error al hacer la llamada:", error);
        res.status(500).json({ error: "Hubo un error al subir el documento." });
    }
});

router.get('/seleccionalumno', async (req, res) => {

    try {
        console.log("Subiendo documento...");
        const respuesta = await llamadaSeleccionarAlumnoAleatorio();
        res.json({ evaluacion: respuesta });
    } catch (error) {
        console.error("Error al hacer la llamada:", error);
        res.status(500).json({ error: "Hubo un error al obtener la pregunta del documento." });
    }
});

/**********************CHATPDF***************************** */

router.post('/chatpdf', async (req, res) => {
    let respuesta = await uploadFile(req.body.archivo);
    res.json({ subirDocumento: respuesta });
});

router.get('/chatpdf', async (req, res) => {
    const conversationResponse = await sendConversation(req.body.content);
    const cleanedContent = conversationResponse.content.replace(/^AI##/, '');
    res.json({ respuesta: cleanedContent });
});

/*****************ASISTENTE VIRTUAL***************************/

router.get('/av', async (req, res) => {
	await llamadaAsistenteApi(res, contentsByRoute['/av']);
});

router.get('/ingles', async (req, res) => {
    await llamadaAsistenteApi(res, contentsByRoute['/ingles']);
});

router.get('/historia', async (req, res) => {
    await llamadaAsistenteApi(res, contentsByRoute['/historia']);
});

router.get('/lengua', async (req, res) => {
    await llamadaAsistenteApi(res, contentsByRoute['/lengua']);
});

router.get('/profesor', async (req, res) => {
	await llamadaAsistenteApi(res, contentsByRoute['/profesor']);
});

router.get('/mates', async (req, res) => {
    await llamadaAsistenteApi(res, contentsByRoute['/mates']);
});

router.post('/avinput',  (req, res) => {
    llamadaAsistenteApiPost(res, req.body.content, '/av');
});

router.post('/inginput',  (req, res) => {
    llamadaAsistenteApiPost(res, req.body.content, '/ingles');
});

router.post('/histinput',  (req, res) => {
    llamadaAsistenteApiPost(res, req.body.content, '/historia');
});

router.post('/leninput',  (req, res) => {
    llamadaAsistenteApiPost(res, req.body.content, '/lengua');
});

router.post('/profinput',  (req, res) => {
    llamadaAsistenteApiPost(res, req.body.content, '/profesor');
});

router.post('/matesinput',  (req, res) => {
    llamadaAsistenteApiPost(res, req.body.content, '/mates');
});

module.exports = router;