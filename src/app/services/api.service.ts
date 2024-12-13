import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private baseUrl: string = 'https://fakestoreapi.com/products';

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.baseUrl);
  }

  getProductById(id: number): Observable<IProduct> {
    return this._http.get<IProduct>(`${this.baseUrl}/${id}`);
  }

}
