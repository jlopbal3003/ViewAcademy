import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-generar-resumen',
  templateUrl: './generar-resumen.component.html',
  styleUrls: ['./generar-resumen.component.css']
})
export class GenerarResumenComponent {

  constructor(protected authService: AuthService){ }

}
