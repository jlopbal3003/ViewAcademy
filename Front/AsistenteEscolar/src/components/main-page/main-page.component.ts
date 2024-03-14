import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(protected authService: AuthService, private router: Router) { }

  goToAsistenteVirtual(){
    this.router.navigate(['/asistente-virtual']);
  }

  goToGenerarResumen(){
    this.router.navigate(['/generar-resumen']);
  }

  goToSeleccionarAlumno(){
    this.router.navigate(['/seleccionar-alumno']);
  }

  goToEvaluacionCompetencias(){
    this.router.navigate(['/evaluacion-competencias']);
  }

  goToDetectorPlagios(){
    this.router.navigate(['/detector-plagios']);
  }

  goToVisualizarAlumnos(){
    alert('Componente VisualizarAlumnos en desarrollo');
  }

  goToVisualizarProfesores(){
    alert('Componente VisualizarProfesores en desarrollo');
  }

  goToVerEstadisticas(){
    alert('Investigando en PowerBI...');
  }
}
