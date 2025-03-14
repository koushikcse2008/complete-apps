// src/app/services/category.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import CategoryModel from './category.model';

interface CategoryResponse {
  data: CategoryModel;  // Assuming the response has a 'data' field that contains the category
}

@Injectable({
  providedIn: 'root',
})

export class CategoryService {
  private apiUrl = `${environment.apiBaseUrl}/category`;
  token = localStorage.getItem('authToken');    
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private http: HttpClient) {}

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(`${this.apiUrl}/list`);
  }

  getCategoriesList(page: number, limit: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<any>(`${this.apiUrl}/list-pagination`, { params, headers: this.headers });
  }

  getCategory(id: string): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(`${this.apiUrl}/edit/${id}`, { headers: this.headers });
  }

  createCategory(category: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(`${this.apiUrl}/create`, category, { headers: this.headers });
  }

  editCategories(id: string): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(`${this.apiUrl}/edit/${id}`, { headers: this.headers });
  }

  updateCategory(id: string, category: CategoryModel): Observable<CategoryModel> {
    return this.http.put<CategoryModel>(`${this.apiUrl}/update/${id}`, category, { headers: this.headers });
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/delete/${id}`, { headers: this.headers });
  }
}
