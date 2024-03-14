import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-evaluacion-competencias',
  templateUrl: './evaluacion-competencias.component.html',
  styleUrls: ['./evaluacion-competencias.component.css']
})
export class EvaluacionCompetenciasComponent {

  constructor(protected authService: AuthService){ }

}
