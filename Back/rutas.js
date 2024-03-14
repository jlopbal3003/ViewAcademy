
const { llamadaAsistenteApi, contentsByRoute, llamadaAsistenteApiPost } = require('./llamada');
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

router.post('/bioinput',  (req, res) => {
    llamadaAsistenteApiPost(res, req.body.content, '/biologia');
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