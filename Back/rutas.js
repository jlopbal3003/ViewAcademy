
const { llamadaAsistenteApi, contentsByRoute } = require('./llamada');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	  res.send('Hello World!');
});

router.get('/av', async (req, res) => {
	await llamadaAsistenteApi(res, contentsByRoute['/av']);
});

router.get('/biologia', async (req, res) => {
    await llamadaAsistenteApi(res, contentsByRoute['/biologia']);
});

router.get('/historia', async (req, res) => {
    const content = contentsByRoute['/historia'];
    await llamadaAsistenteApi(res, content);
});

router.get('/lengua', async (req, res) => {
    const content = contentsByRoute['/lengua'];
    await llamadaAsistenteApi(res, content);

});

router.get('/profesor', async (req, res) => {
	const content = contentsByRoute['/profesor'];
	await llamadaAsistenteApi(res, content);
});

router.post('/avinput',  (req, res) => {
    const content = req.body.content;
    console.log(content);
    llamadaAsistenteApi(res, content);
});

module.exports = router;