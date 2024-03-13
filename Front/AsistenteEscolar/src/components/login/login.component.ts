import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService){

  }

  onSubmit() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);

    this.authService.login(this.username, this.password);
  }
}
