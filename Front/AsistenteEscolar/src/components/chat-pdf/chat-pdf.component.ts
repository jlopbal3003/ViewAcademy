import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat-pdf',
  templateUrl: './chat-pdf.component.html',
  styleUrls: ['./chat-pdf.component.css']
})


export class ChatPdfComponent {

  public pdfFile: FormGroup | undefined;
  public hasPdf: boolean = false;
  mensaje: any;
  respuesta: any;

  constructor(protected authService: AuthService, private apiService: ApiService, private readonly formBuilder: FormBuilder, private http: HttpClient) { }
  pdfUploaded: boolean = false;


  ngOnInit() {
    this.pdfFile = this.formBuilder.group({
      profile: ['']
    });

  }

  // onSubmit() {
  //   if (!this.pdfFile) {
  //     console.error('Debe seleccionar un archivo PDF.');
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('archivo', this.pdfFile?.get('profile')?.value);

  //   this.apiService.uploadPdf(formData).subscribe(
  //     (response: any) => {
  //       this.pdfUploaded = true;
  //       console.log('Archivo PDF subido exitosamente:', response);
  //     },
  //     (error: any) => {
  //       console.error('Error al subir archivo PDF:', error);
  //     }
  //   );
  // }

  onSubmit() {
    if (!this.pdfFile) {
      console.error('Debe seleccionar un archivo PDF.');
      return;
    }

    const formData = new FormData();
    formData.append('archivo', this.pdfFile?.get('profile')?.value);

    this.http.post("http://localhost:3000/chatpdf", formData).subscribe(
      (response) => {
        console.log('Esta bien: ', response);
        this.pdfUploaded = true;
      },
      (error) => {
        console.error('Error al enviar datos al servidor:', error);
      }
    );
  }

  onFileSelected(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.pdfFile?.get('profile')?.setValue(fileList[0]);
      console.log(this.pdfFile?.get('profile')?.value);
      this.hasPdf = true;
    }
    event.preventDefault();
  }

  enviarMensaje() {
    if (this.mensaje.trim() !== '') {
      const body = { mensaje: this.mensaje, user: this.authService.session };
      this.http.post("http://localhost:3000/chatpdfmensaje", body).subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response.respuesta);
          this.respuesta = "<h1 class='fs-4 card-title fw-bold mb-4'>Respuesta:</h1>" + response.respuesta;
        },
        (error) => {
          console.error('Error al enviar la solicitud:', error);
        }
      );
    }
  }


}

