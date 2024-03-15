import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-generar-resumen',
  templateUrl: './generar-resumen.component.html',
  styleUrls: ['./generar-resumen.component.css']
})
export class GenerarResumenComponent {

  public pdfFile: FormGroup | undefined;
  public hasPdf: boolean = false;

  constructor(protected authService: AuthService, private apiService: ApiService, private readonly formBuilder: FormBuilder){ }

  ngOnInit() {
    this.pdfFile = this.formBuilder.group({
      profile: ['']
    });
}

  onSubmit() {
    if (!this.pdfFile) {
      console.error('Debe seleccionar un archivo PDF.');
      return;
    }

    const formData = new FormData();
    formData.append('archivo', this.pdfFile?.get('profile')?.value);

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
      this.pdfFile?.get('profile')?.setValue(fileList[0]);
      console.log(this.pdfFile?.get('profile')?.value);
      this.hasPdf = true;
    }
    event.preventDefault();
  }

}
