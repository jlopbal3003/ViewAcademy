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
    if (user.username === 'usuario1' && user.password === '123') {
      alert('Inicio de sesión correcto');
      this.session = { username: 'usuario1' };
      this.router.navigate(['/inicio']);
    } else{
      alert('Error al iniciar sesión');
    }

    // this.apiService.loginUser(user).subscribe(
    //   response => {
    //     alert('Inicio de sesión correcto');
    //     this.session = { username: 'usuario1' };
    //     this.router.navigate(['/inicio']);
    //   },
    //   error => {
    //     alert('Error al iniciar sesión');
    //     console.error(error);
    //   });
  }

  logout(){
    this.session = null;
    alert('Se ha cerrado correctamente la sesión');
    this.router.navigate(['/login']);
  }
}
