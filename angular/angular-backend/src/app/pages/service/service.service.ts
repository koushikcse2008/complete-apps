import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import ServiceModel from './service.model';

interface ServiceResponse {
  data: ServiceModel;  // Assuming the response has a 'data' field that contains the service
}

@Injectable({
  providedIn: 'root',
})

export class ServiceService {
  private apiUrl = `${environment.apiBaseUrl}/service`;
  token = localStorage.getItem('authToken');    
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private http: HttpClient) {}

  getServices(): Observable<ServiceModel[]> {
    return this.http.get<ServiceModel[]>(`${this.apiUrl}/list`, { headers: this.headers });
  }

  getServicesList(page: number, limit: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<any>(`${this.apiUrl}/list-pagination`, { params, headers: this.headers });
  }

  getService(id: string): Observable<ServiceModel> {
    return this.http.get<ServiceModel>(`${this.apiUrl}/edit/${id}`, { headers: this.headers });
  }

  createService(service: ServiceModel): Observable<ServiceModel> {
    return this.http.post<ServiceModel>(`${this.apiUrl}/create`, service, { headers: this.headers });
  }

  editServices(id: string): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(`${this.apiUrl}/edit/${id}`, { headers: this.headers });
  }

  updateService(id: string, service: ServiceModel): Observable<ServiceModel> {
    return this.http.put<ServiceModel>(`${this.apiUrl}/update/${id}`, service, { headers: this.headers });
  }

  deleteService(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/delete/${id}`, { headers: this.headers });
  }
}
