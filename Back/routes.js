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

/**SELECCIONAR ALUMNO**/

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
    let respuesta = llamadaAsistenteApiPost(res, req.body.content, '/av');
    res.json({ respuesta: respuesta });
});

router.post('/inginput',  (req, res) => {
    let respuesta = llamadaAsistenteApiPost(res, req.body.content, '/ingles');
    res.json({ respuesta: respuesta });
});

router.post('/histinput',  (req, res) => {
    let respuesta = llamadaAsistenteApiPost(res, req.body.content, '/historia');
    res.json({ respuesta: respuesta });
});

router.post('/leninput',  (req, res) => {
    let respuesta = llamadaAsistenteApiPost(res, req.body.content, '/lengua');
    res.json({ respuesta: respuesta });
});

router.post('/profinput',  (req, res) => {
    let respuesta = llamadaAsistenteApiPost(res, req.body.content, '/profesor');
    res.json({ respuesta: respuesta });
});

router.post('/matesinput',  (req, res) => {
    let respuesta = llamadaAsistenteApiPost(res, req.body.content, '/mates');
    res.json({ respuesta: respuesta });
});

module.exports = router;