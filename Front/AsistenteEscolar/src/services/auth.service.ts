import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../models/usuario';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  session: any = null;
  rol: string = 'sin_rol';

  constructor(private router: Router, private apiService: ApiService) { }

  login(user: IUser){
    this.apiService.loginUser(user).subscribe(
      response => {
        this.rol = response.rol_usuario;
        this.session = user.email;
        alert('Inicio de sesión correcto');
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

  goToMainPage(){
    this.router.navigate(['/inicio']);
  }

}
