import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AsistenteService } from 'src/services/asistente.service';

@Component({
  selector: 'app-asistente-virtual',
  templateUrl: './asistente-virtual.component.html',
  styleUrls: ['./asistente-virtual.component.css'],
})
export class AsistenteVirtualComponent {
  respuesta: string = '';
  respuestas: string[] = [];

  mensaje: string = '';
  mensajes: string[] = [];

  prompt: string = '';

  //inProgress: boolean = false;

  constructor(
    protected authService: AuthService,
    private asistenteService: AsistenteService
  ) {}

  ngOnInit() {
    if (this.authService.rol === 'alumno') {
      this.prompt = 'General';
      this.getRespuestaGeneral();
    } else if (this.authService.rol === 'profesor') {
      this.prompt = 'Profesor';
      this.getRespuestaProfesor();
    }
  }

  enviarMensaje() {
    if (this.prompt == 'General') {
      this.enviarMensajeGeneral();
    } else if (this.prompt == 'Profesor') {
      this.enviarMensajeProfesor();
    } else if (this.prompt == 'Ingles') {
      this.enviarMensajeIngles();
    } else if (this.prompt == 'Lengua') {
      this.enviarMensajeLengua();
    } else if (this.prompt == 'Historia') {
      this.enviarMensajeHistoria();
    } else if (this.prompt == 'Mates') {
      this.enviarMensajeMatematicas();
    }
  }

  getRespuestaProfesor() {
    this.asistenteService.getRespuestaProfesor().subscribe((data: any[]) => {
      this.respuesta = JSON.stringify(data);
      // Convertir el string en un objeto JavaScript
      let responseObject = JSON.parse(JSON.stringify(data));
      // Obtener el mensaje de respuesta
      let respuesta = responseObject.respuesta;
      // Ahora `respuesta` contiene el mensaje de respuesta
      this.respuesta = respuesta;
      console.log(this.respuesta);
    });
  }

  enviarMensajeProfesor() {
    if (this.mensaje.trim() !== '') {
      this.mensajes.push(this.mensaje);

      // Llamar al servicio para enviar el mensaje
      this.asistenteService.enviarMensajeProfesor(this.mensaje).subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
          this.respuestas.push(response.respuesta.substring(4));
        },
        (error) => {
          console.error('Error al enviar la solicitud:', error);
        }
      );

      this.mensaje = ''; // Limpiar el textarea después de enviar el mensaje
    }
  }

  getRespuestaGeneral() {
    this.asistenteService.getRespuestaGeneral().subscribe((data: any[]) => {
      this.respuesta = JSON.stringify(data);
      // Convertir el string en un objeto JavaScript
      let responseObject = JSON.parse(JSON.stringify(data));
      // Obtener el mensaje de respuesta
      let respuesta = responseObject.respuesta;
      // Ahora `respuesta` contiene el mensaje de respuesta
      this.respuesta = respuesta;
      console.log(this.respuesta);
    });
  }

  enviarMensajeGeneral() {
    if (this.mensaje.trim() !== '') {
      this.mensajes.push(this.mensaje);

      // Llamar al servicio para enviar el mensaje
      this.asistenteService.enviarMensajeGeneral(this.mensaje).subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
          this.respuestas.push(response.respuesta.substring(4));
        },
        (error) => {
          console.error('Error al enviar la solicitud:', error);
        }
      );

      this.mensaje = ''; // Limpiar el textarea después de enviar el mensaje
    }
  }

  getRespuestaIngles() {
    this.asistenteService.getRespuestaIngles().subscribe((data: any[]) => {
      this.respuesta = JSON.stringify(data);
      // Convertir el string en un objeto JavaScript
      let responseObject = JSON.parse(JSON.stringify(data));
      // Obtener el mensaje de respuesta
      let respuesta = responseObject.respuesta;
      // Ahora `respuesta` contiene el mensaje de respuesta
      this.respuesta = respuesta;
      console.log(this.respuesta);
    });
  }

  enviarMensajeIngles() {
    if (this.mensaje.trim() !== '') {
      this.mensajes.push(this.mensaje);

      // Llamar al servicio para enviar el mensaje
      this.asistenteService.enviarMensajeIngles(this.mensaje).subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
          this.respuestas.push(response.respuesta.substring(4));
        },
        (error) => {
          console.error('Error al enviar la solicitud:', error);
        }
      );

      this.mensaje = ''; // Limpiar el textarea después de enviar el mensaje
    }
  }

  getRespuestaLengua() {
    this.asistenteService.getRespuestaLengua().subscribe((data: any[]) => {
      this.respuesta = JSON.stringify(data);
      // Convertir el string en un objeto JavaScript
      let responseObject = JSON.parse(JSON.stringify(data));
      // Obtener el mensaje de respuesta
      let respuesta = responseObject.respuesta;
      // Ahora `respuesta` contiene el mensaje de respuesta
      this.respuesta = respuesta;
      console.log(this.respuesta);
    });
  }

  enviarMensajeLengua() {
    if (this.mensaje.trim() !== '') {
      this.mensajes.push(this.mensaje);

      // Llamar al servicio para enviar el mensaje
      this.asistenteService.enviarMensajeLengua(this.mensaje).subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
          this.respuestas.push(response.respuesta.substring(4));
        },
        (error) => {
          console.error('Error al enviar la solicitud:', error);
        }
      );

      this.mensaje = ''; // Limpiar el textarea después de enviar el mensaje
    }
  }

  getRespuestaHistoria() {
    this.asistenteService.getRespuestaHistoria().subscribe((data: any[]) => {
      this.respuesta = JSON.stringify(data);
      // Convertir el string en un objeto JavaScript
      let responseObject = JSON.parse(JSON.stringify(data));
      // Obtener el mensaje de respuesta
      let respuesta = responseObject.respuesta;
      // Ahora `respuesta` contiene el mensaje de respuesta
      this.respuesta = respuesta;
      console.log(this.respuesta);
    });
  }

  enviarMensajeHistoria() {
    if (this.mensaje.trim() !== '') {
      this.mensajes.push(this.mensaje);

      // Llamar al servicio para enviar el mensaje
      this.asistenteService.enviarMensajeHistoria(this.mensaje).subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
          this.respuestas.push(response.respuesta.substring(4));
        },
        (error) => {
          console.error('Error al enviar la solicitud:', error);
        }
      );

      this.mensaje = ''; // Limpiar el textarea después de enviar el mensaje
    }
  }

  getRespuestaMatematicas() {
    this.asistenteService.getRespuestaMatematicas().subscribe((data: any[]) => {
      this.respuesta = JSON.stringify(data);
      // Convertir el string en un objeto JavaScript
      let responseObject = JSON.parse(JSON.stringify(data));
      // Obtener el mensaje de respuesta
      let respuesta = responseObject.respuesta;
      // Ahora `respuesta` contiene el mensaje de respuesta
      this.respuesta = respuesta;
      console.log(this.respuesta);
    });
  }

  enviarMensajeMatematicas() {
    if (this.mensaje.trim() !== '') {
      this.mensajes.push(this.mensaje);
      // Llamar al servicio para enviar el mensaje
      this.asistenteService.enviarMensajeMatematicas(this.mensaje).subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
          this.respuestas.push(response.respuesta.substring(4));
        },
        (error) => {
          console.error('Error al enviar la solicitud:', error);
        }
      );
      this.mensaje = ''; // Limpiar el textarea después de enviar el mensaje
    }
  }

  promptGeneral() {
    this.prompt = 'General';
    this.vaciarChat();
    this.getRespuestaGeneral();
  }

  promptIngles() {
    this.prompt = 'Ingles';
    this.vaciarChat();
    this.getRespuestaIngles();
  }

  promptLengua() {
    this.prompt = 'Lengua';
    this.vaciarChat();
    this.getRespuestaLengua();
  }

  promptHistoria() {
    this.prompt = 'Historia';
    this.vaciarChat();
    this.getRespuestaHistoria();
  }

  promptMatematicas() {
    this.prompt = 'Mates';
    this.vaciarChat();
    this.getRespuestaMatematicas();
  }

  vaciarChat() {
    this.respuesta = '';
    this.respuestas = [];
    this.mensaje = '';
    this.mensajes = [];
  }

  handleEnterKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      // Aquí llamas al método que deseas ejecutar
      this.enviarMensaje();
      // Evitar el comportamiento por defecto de la tecla "Enter" en el textarea (salto de línea)
      event.preventDefault();
    }
  }
}
