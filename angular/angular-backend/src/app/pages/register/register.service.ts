// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import UserModel from '../user/user.model';

@Injectable({
  providedIn: 'root',
})

export class RegisterService {
  private apiUrl = `${environment.apiBaseUrl}/user/register`;
  
  constructor(private http: HttpClient) {}

  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.apiUrl}`, user);
  }

}
