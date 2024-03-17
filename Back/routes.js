const { uploadFile2 } = require('./EvaluacionCompetencias.js');
const { uploadFile4} = require('./Resumen.js');
const { uploadFile3 } = require('./SeleccionarAlumno.js');
const { uploadFile1, sendConversation1} = require('./ChatPDF.js');
const { llamadaAsistenteApi, contentsByRoute, llamadaAsistenteApiPost } = require('./calls');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Configuración de multer para la carga de archivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'files'); // Carpeta donde se guardarán los archivos
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Nombre de archivo único
    }
  });
  const upload = multer({ storage: storage });

router.get('/', (req, res) => {
	  res.send('Hello World!');
});
/************************EVALUACION DE COMPETENCIAS***************************/
router.post('/competencias',upload.single('archivo'), async (req, res) => {
    const archivoPath = req.file.path;
    let data = await uploadFile2(archivoPath);
    console.log(data);
    res.json({ respuesta: data });
});

/*******************************resumen*****************/

router.post('/resumen',upload.single('archivo'), async (req, res) => {
    const archivoPath = req.file.path;
    let data = await uploadFile4(archivoPath);
    console.log(data);
    res.json({ respuesta: data });
});


/*****************SELECCIONAR ALUMNO******************/

router.post('/seleccionalumno',upload.single('archivo'), async (req, res) => {
    const archivoPath = req.file.path;
    let data = await uploadFile3(archivoPath);
    console.log(data);
    res.json({ respuesta: data });
});

/**********************CHATPDF***************************** */

router.post('/chatpdf',upload.single('archivo'), async (req, res) => {
    const archivoPath = req.file.path;
    let respuesta = uploadFile1(archivoPath);
    res.json({ subirDocumento: respuesta });
});

router.post('/chatpdfmensaje', async (req, res) => {
    const mensaje = req.body.mensaje;
    const conversationResponse = await sendConversation1(mensaje);
    const cleanedContent = conversationResponse.replace(/^AI##/, '');
    res.json({ respuesta: cleanedContent });
});

/**********************PLAGIO***************************** */

// router.post('/plagio',upload.single('archivo'), async (req, res) => {
//     const archivoPath = req.file.path;
//     let respuesta = plagio(archivoPath);
//     res.json({ subirDocumento: respuesta });
// });


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