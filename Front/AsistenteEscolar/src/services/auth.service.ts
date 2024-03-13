import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/models/usuario';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  session: any = null;
  rol: string = 'sin_rol';

  constructor(private router: Router, private apiService: ApiService) { }

  login(user: IUser){
    // if (user.email === 'email' && user.password === '123') {
    //   alert('Inicio de sesión correcto');
    //   this.session = { username: 'emailusuario1' };
    //   this.router.navigate(['/inicio']);
    // } else{
    //   alert('Error al iniciar sesión');
    // }

    this.apiService.loginUser(user).subscribe(
      response => {
        console.log(response);
        alert('Inicio de sesión correcto');
        this.session = { email: 'usuario1' };
        this.router.navigate(['/inicio']);
      },
      error => {
        alert('Error al iniciar sesión');
        console.error(error);
      });
  }

  logout(){
    this.session = null;
    alert('Se ha cerrado correctamente la sesión');
    this.router.navigate(['/login']);
  }
}
