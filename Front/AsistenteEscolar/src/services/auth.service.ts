import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../models/usuario';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  session: any = null;
  rol: string = 'admin';

  constructor(private router: Router, private apiService: ApiService) { }

  login(user: IUser){
    this.apiService.loginUser(user).subscribe(
      response => {
        console.log(response);
        alert('Inicio de sesión correcto');
        this.session = user.email;
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
