// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import ProductModel from './product.model';

interface ProductResponse {
  data: ProductModel;  // Assuming the response has a 'data' field that contains the product
}

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  private apiUrl = `${environment.apiBaseUrl}/product`;
  token = localStorage.getItem('authToken');    
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.apiUrl}/list`, { headers: this.headers });
  }

  getProductsList(page: number, limit: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<any>(`${this.apiUrl}/list-pagination`, { params, headers: this.headers });
  }

  getProduct(id: string): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.apiUrl}/edit/${id}`, { headers: this.headers });
  }

  createProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(`${this.apiUrl}/create`, product, { headers: this.headers });
  }

  editProducts(id: string): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.apiUrl}/edit/${id}`, { headers: this.headers });
  }

  updateProduct(id: string, product: ProductModel): Observable<ProductModel> {
    return this.http.put<ProductModel>(`${this.apiUrl}/update/${id}`, product, { headers: this.headers });
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/delete/${id}`, { headers: this.headers });
  }
}
