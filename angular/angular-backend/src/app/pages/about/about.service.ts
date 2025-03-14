import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import AboutModel from './about.model';

interface AboutResponse {
  data: AboutModel;  // Assuming the response has a 'data' field that contains the about
}

@Injectable({
  providedIn: 'root',
})

export class AboutService {
  private apiUrl = `${environment.apiBaseUrl}/about`;
  token = localStorage.getItem('authToken');    
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private http: HttpClient) {}

  getAbouts(): Observable<AboutModel[]> {
    return this.http.get<AboutModel[]>(`${this.apiUrl}/list`, { headers: this.headers });
  }

  getAboutsList(page: number, limit: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<any>(`${this.apiUrl}/list-pagination`, { params, headers: this.headers });
  }

  getAbout(id: string): Observable<AboutModel> {
    return this.http.get<AboutModel>(`${this.apiUrl}/edit/${id}`, { headers: this.headers });
  }

  createAbout(about: AboutModel): Observable<AboutModel> {
    return this.http.post<AboutModel>(`${this.apiUrl}/create`, about, { headers: this.headers });
  }

  editAbouts(id: string): Observable<AboutResponse> {
    return this.http.get<AboutResponse>(`${this.apiUrl}/edit/${id}`, { headers: this.headers });
  }

  updateAbout(id: string, about: AboutModel): Observable<AboutModel> {
    return this.http.put<AboutModel>(`${this.apiUrl}/update/${id}`, about, { headers: this.headers });
  }

  deleteAbout(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/delete/${id}`, { headers: this.headers });
  }
}
