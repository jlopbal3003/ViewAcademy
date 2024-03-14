import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-asistente-virtual',
  templateUrl: './asistente-virtual.component.html',
  styleUrls: ['./asistente-virtual.component.css']
})
export class AsistenteVirtualComponent {

  constructor(protected authService: AuthService){ }

  
}
