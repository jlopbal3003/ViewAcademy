import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from 'src/models/response';
import { IUser } from 'src/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'https://ia-kong-dev.codingbuddy-4282826dce7d155229a320302e775459-0000.eu-de.containers.appdomain.cloud/api';

  constructor(private http: HttpClient) { }

  loginUser(user: IUser): Observable<any> {
    return this.http.post<any>(this.url+'/login', user);
  }
}
