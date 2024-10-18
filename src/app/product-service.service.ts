import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private http = inject(HttpClient); // Use inject to initialize HttpClient
  private url = 'https://dummyjson.com/products';

  getProducts(): Observable<Product[]> {
    
    return this.http.get<{ products: Product[] }>(this.url).pipe(
      map(response => response.products || []) // Return an empty array if undefined
    );
  }
}
