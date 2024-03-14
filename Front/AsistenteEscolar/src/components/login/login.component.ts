import { Component } from '@angular/core';
import { IUser } from '../../models/usuario';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  user: IUser = {email: '', password: ''};

  constructor(protected authService: AuthService){ }

  onSubmit() {
    console.log('Usuario:', this.email);
    console.log('Contraseña:', this.password);
    this.user = {email: this.email, password: this.password};
    this.authService.login(this.user);
  }
}
