
const { llamadaAsistenteApi, contentsByRoute } = require('./llamada');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	  res.send('Hello World!');
});

router.get('/av', (req, res) => {
    const content = contentsByRoute['/av'];
	llamadaAsistenteApi(res, content);
    res.send('Petición realizada');
});

router.get('/biologia', (req, res) => {
    const content = contentsByRoute['/biologia'];
    llamadaAsistenteApi(res, content);
    res.send('Petición realizada');
});

router.get('/historia', (req, res) => {
    const content = contentsByRoute['/historia'];
    llamadaAsistenteApi(res, content);
    res.send('Petición realizada');
});

router.get('/lengua', (req, res) => {
    const content = contentsByRoute['/lengua'];
    llamadaAsistenteApi(res, content);
    res.send('Petición realizada');
});

module.exports = router;