import { Component } from '@angular/core';
import { IUser } from 'src/models/usuario';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  user: IUser = {username: '', password: ''};

  constructor(private authService: AuthService){ }

  onSubmit() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    this.user = {username: this.username, password: this.password};
    this.authService.login(this.user);
  }
}
