import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-detector-plagios',
  templateUrl: './detector-plagios.component.html',
  styleUrls: ['./detector-plagios.component.css']
})
export class DetectorPlagiosComponent {

  constructor(protected authService: AuthService){ }

}
