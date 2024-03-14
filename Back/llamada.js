const axios = require('axios');
const apiKey = 'psvardT7iO02ZXzlqNeyWOK2xfwcOxlh';
const apiUrl = 'https://ia-kong-dev.codingbuddy-4282826dce7d155229a320302e775459-0000.eu-de.containers.appdomain.cloud/aigen/llm/openai/clients';

const headers = {
    'Content-Type': 'application/json',
	'X-API-KEY': `${apiKey}`
  };

  const contentGeneral = "Quiero que actues como un asistente virtual y me ayudes con los problemas de mis asignaturas.Si algo no entiendes, pregúntame.Quiero que no me hables de cosas que no tengan que ver con mis estudios aunque yo te lo pregunte no me generes una respuesta dime que no puedo acceder a esa informacion. Quiero que la respuesta sea lo mas corta posible con la informacion que necesito para resolver mis problemas.Las respuestas las tiene que entender un niño de 12 años.";

  const contentHistoria = "Quiero que me ayudes con la historia de España. Si algo no entiendes, pregúntame.Quiero que no me hables de cosas que no tengan que ver con la historia de España aunque yo te lo pregunte no me generes una respuesta dime que no puedo acceder a esa informacion.Quiero que la respuesta sea lo mas corta posible con la informacion que necesito para resolver mis problemas.Las respuestas las tiene que entender un niño de 12 años.";

  const contentBiologia = "Quiero que me ayudes con la biologia, actua como un experto biologo. Si algo no entiendes, pregúntame.Quiero que no me hables de cosas que no tengan que ver con las matemáticas aunque yo te lo pregunte no me generes una respuesta dime que no puedo acceder a esa informacion.Quiero que la respuesta sea lo mas corta posible con la informacion que necesito para resolver mis problemas.Las respuestas las tiene que entender un niño de 12 años.";

  const contentLengua = "Quiero que me ayudes con la lengua que actues como un experto en lengua. Si algo no entiendes, pregúntame.Quiero que no me hables de cosas que no tengan que ver con la lengua aunque yo te lo pregunte no me generes una respuesta dime que no puedo acceder a esa informacion.Quiero que la respuesta sea lo mas corta posible con la informacion que necesito para resolver mis problemas.Las respuestas las tiene que entender un niño de 12 años.";

  const contentProfesor = "Quiero que actues como un experto en educacion de primaria y secundaria,tambien como psicologo infantil por si tengo problemas con los niños. Si algo no entiendes, pregúntame.Quiero que no me hables de cosas que no tengan que ver con la educacion aunque yo te lo pregunte no me generes una respuesta dime que no puedo acceder a esa informacion.";


  const contentsByRoute = {
		'/av': contentGeneral,
		'/biologia': contentBiologia,
		'/historia': contentHistoria,
		'/lengua': contentLengua,
		'/profesor': contentProfesor
	};

  async function llamadaAsistenteApi(res,content){
	try {
		const apiResponse = await axios.post(apiUrl, {
			model: "gpt-35-turbo-0301",
			uuid: "sdgeasasger-4t2asdfsgasr3-fq423dwq",
			message: {
			  role: "user",
			  content: content,
			},
			temperature: 0.05,
			origin: "escueladata",
			tokens: 1000,
			folder: "root",
			account:"WatsonX-VN",
			user: ""
		}, { headers });

		res.send(apiResponse.data.content);
		return apiResponse.data.content;
	}
	catch (error) {
		console.error('Error al realizar la solicitud a la API:', error.message);
		if (error.response) {
		console.error('Respuesta de la API:', error.response.data);
		console.error('Código de estado:', error.response.status);
		}
		res.status(500).send('Error al realizar la solicitud a la API');
	}
 }


 module.exports = { llamadaAsistenteApi, contentsByRoute };
