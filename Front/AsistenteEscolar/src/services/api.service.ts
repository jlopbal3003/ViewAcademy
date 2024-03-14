import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  loginUser(user: IUser): Observable<any> {
    return this.http.post<any>(this.url+'/users/login', user);
  }

  uploadSummary(formData: FormData): Observable<any> {
    const uploadUrl = `${this.url}/upload-pdf`;

    return this.http.post(uploadUrl, formData);
  }
}
