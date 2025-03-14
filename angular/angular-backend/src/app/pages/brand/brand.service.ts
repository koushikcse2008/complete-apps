import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import BrandModel from './brand.model';

interface BrandResponse {
  data: BrandModel;  // Assuming the response has a 'data' field that contains the brand
}

@Injectable({
  providedIn: 'root',
})

export class BrandService {
  private apiUrl = `${environment.apiBaseUrl}/brand`;
  token = localStorage.getItem('authToken');    
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private http: HttpClient) {}

  getBrands(): Observable<BrandModel[]> {
    return this.http.get<BrandModel[]>(`${this.apiUrl}/list`, { headers: this.headers });
  }

  getBrandsList(page: number, limit: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<any>(`${this.apiUrl}/list-pagination`, { params, headers: this.headers });
  }

  getBrand(id: string): Observable<BrandModel> {
    return this.http.get<BrandModel>(`${this.apiUrl}/edit/${id}`, { headers: this.headers });
  }

  createBrand(brand: BrandModel): Observable<BrandModel> {
    return this.http.post<BrandModel>(`${this.apiUrl}/create`, brand, { headers: this.headers });
  }

  editBrands(id: string): Observable<BrandResponse> {
    return this.http.get<BrandResponse>(`${this.apiUrl}/edit/${id}`, { headers: this.headers });
  }

  updateBrand(id: string, brand: BrandModel): Observable<BrandModel> {
    return this.http.put<BrandModel>(`${this.apiUrl}/update/${id}`, brand, { headers: this.headers });
  }

  deleteBrand(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/delete/${id}`, { headers: this.headers });
  }
}
