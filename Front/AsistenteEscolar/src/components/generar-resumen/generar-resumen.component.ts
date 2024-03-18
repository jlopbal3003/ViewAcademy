import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-generar-resumen',
  templateUrl: './generar-resumen.component.html',
  styleUrls: ['./generar-resumen.component.css']
})
export class GenerarResumenComponent {
  public pdfFile: FormGroup | undefined;
  public hasPdf: boolean = false;
  public mensaje: any;
  public respuesta: any;
  public pdfUploaded: boolean = false;

  isLoading: boolean = false;

  constructor(protected authService: AuthService, private apiService: ApiService, private readonly formBuilder: FormBuilder, private http: HttpClient){ }

  ngOnInit() {
    this.pdfFile = this.formBuilder.group({
      profile: ['']
    });
  }

  onSubmit(){

  this.isLoading = true;


    if (!this.pdfFile) {
      console.error('Debe seleccionar un archivo PDF.');
    this.isLoading = false;
      return;
    }

    const formData = new FormData();
    formData.append('archivo', this.pdfFile?.get('profile')?.value);
    formData.append('user', this.authService.session);

    this.http.post<any>("http://localhost:3000/resumen", formData).subscribe(
      (response: any) => {
        this.respuesta = response.respuesta;
        this.pdfUploaded = true;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error al enviar datos al servidor:', error);
  this.isLoading = false;
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

  // Función para descargar el PDF
  downloadPdf() {
    const options = {
      margin: 1,
      filename: 'GenerarResumenViewAcademy.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf()
      .from(this.respuesta)
      .set(options)
      .save();
  }
}
