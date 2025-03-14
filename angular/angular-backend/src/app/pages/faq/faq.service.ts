
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import FaqModel from './faq.model';

interface FaqResponse {
  data: FaqModel;  // Assuming the response has a 'data' field that contains the category
}

@Injectable({
  providedIn: 'root',
})

export class FaqService {
  private apiUrl = `${environment.apiBaseUrl}/faq`;
  token = localStorage.getItem('authToken');    
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private http: HttpClient) {}

  getFaqs(): Observable<FaqModel[]> {
    return this.http.get<FaqModel[]>(`${this.apiUrl}/list`, { headers: this.headers });
  }

  getFaqsList(page: number, limit: number): Observable<any> {

    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<any>(`${this.apiUrl}/list-pagination`, { params, headers: this.headers });
  }

  getFaq(id: string): Observable<FaqModel> {
    return this.http.get<FaqModel>(`${this.apiUrl}/edit/${id}`, { headers: this.headers });
  }

  createFaq(faqData: FaqModel): Observable<FaqModel> {
    return this.http.post<FaqModel>(`${this.apiUrl}/create`, faqData, { headers: this.headers });
  }

  editFaqs(id: string): Observable<FaqResponse> {    
    return this.http.get<FaqResponse>(`${this.apiUrl}/edit/${id}`, { headers: this.headers });
  }

  updateFaq(id: string, faqData: FaqModel): Observable<FaqModel> {
    return this.http.put<FaqModel>(`${this.apiUrl}/update/${id}`, faqData, { headers: this.headers });
  }

  deleteFaq(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/delete/${id}`, { headers: this.headers });
  }
}
