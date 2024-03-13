import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from 'src/models/response';
import { IUser } from 'src/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  loginUser(user: IUser): Observable<any> {
    return this.http.post<any>(this.url+'/users/login', user);
  }
}
