import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import UserModel from './user.model';

interface UserResponse {
  data: UserModel;  // Assuming the response has a 'data' field that contains the user
}

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private apiUrl = `${environment.apiBaseUrl}/user`;
  token = localStorage.getItem('authToken');    
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.apiUrl}/list`, { headers: this.headers });
  }

  getUsersList(page: number, limit: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<any>(`${this.apiUrl}/list-pagination`, { params, headers: this.headers });
  }

  getUser(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.apiUrl}/edit/${id}`, { headers: this.headers });
  }

  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.apiUrl}/create`, user, { headers: this.headers });
  }

  editUsers(id: string): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.apiUrl}/edit/${id}`, { headers: this.headers });
  }

  updateUser(id: string, user: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(`${this.apiUrl}/update/${id}`, user, { headers: this.headers });
  }

  deleteUser(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/delete/${id}`, { headers: this.headers });
  }
}
