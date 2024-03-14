import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-seleccionar-alumno',
  templateUrl: './seleccionar-alumno.component.html',
  styleUrls: ['./seleccionar-alumno.component.css']
})
export class SeleccionarAlumnoComponent {

  pdfFile: File | undefined;

  constructor(protected authService: AuthService, private apiService: ApiService){ }

  onSubmit() {
    if (!this.pdfFile) {
      console.error('Debe seleccionar un archivo PDF.');
      return;
    }

    const formData = new FormData();
    formData.append('pdfFile', this.pdfFile);

    this.apiService.uploadPdf(formData).subscribe(
      (response: any) => {
        console.log('Archivo PDF subido exitosamente:', response);
      },
      (error: any) => {
        console.error('Error al subir archivo PDF:', error);
      }
    );
  }

  onFileSelected(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.pdfFile = fileList[0];
    }
  }

}
