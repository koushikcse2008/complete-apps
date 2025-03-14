// src/app/services/contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import ContactModel from './contact.model';

interface ContactResponse {
  data: ContactModel;  // Assuming the response has a 'data' field that contains the contact
}

@Injectable({
  providedIn: 'root',
})

export class ContactService {
  private apiUrl = `${environment.apiBaseUrl}/contact`;
  token = localStorage.getItem('authToken');    
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private http: HttpClient) {}

  getContacts(): Observable<ContactModel[]> {
    return this.http.get<ContactModel[]>(`${this.apiUrl}/list`, { headers: this.headers });
  }

  getContactsList(page: number, limit: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<any>(`${this.apiUrl}/list-pagination`, { params, headers: this.headers });
  }

  getContact(id: string): Observable<ContactModel> {
    return this.http.get<ContactModel>(`${this.apiUrl}/edit/${id}`, { headers: this.headers });
  }

  createContact(contact: ContactModel): Observable<ContactModel> {
    return this.http.post<ContactModel>(`${this.apiUrl}/create`, contact, { headers: this.headers });
  }

  editContacts(id: string): Observable<ContactResponse> {
    return this.http.get<ContactResponse>(`${this.apiUrl}/edit/${id}`, { headers: this.headers });
  }

  updateContact(id: string, contact: ContactModel): Observable<ContactModel> {
    return this.http.put<ContactModel>(`${this.apiUrl}/update/${id}`, contact, { headers: this.headers });
  }

  deleteContact(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/delete/${id}`, { headers: this.headers });
  }
}
