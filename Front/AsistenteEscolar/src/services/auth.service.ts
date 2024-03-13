import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  session: any = null;

  constructor(private router: Router) { }

  login(username: string, password: string){
    if (username === 'usuario1' && password === '123') {
      alert('Inicio de sesión correcto');
      this.session = { username: 'usuario1' };
      console.log("holahola quieres subir");
      this.router.navigate(['/inicio']);
    } else{
      alert('Error al iniciar sesión');
    }
  }

  logout(){
    this.session = null;
    alert('Se ha cerrado correctamente la sesión');
    this.router.navigate(['/login']);
  }
}
