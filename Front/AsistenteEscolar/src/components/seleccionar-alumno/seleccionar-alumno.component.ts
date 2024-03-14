import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-seleccionar-alumno',
  templateUrl: './seleccionar-alumno.component.html',
  styleUrls: ['./seleccionar-alumno.component.css']
})
export class SeleccionarAlumnoComponent {

  constructor(protected authService: AuthService){ }

}
