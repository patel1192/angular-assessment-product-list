import { Product } from "../model/product.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
  })
  export class ProductsService {
    constructor(private http: HttpClient) {}
  
    getProducts(): Observable<Product[]> {
      return this.http
        .get<Product[]>(`https://random-data-api.com/api/coffee/random_coffee?size=50`)
        .pipe(
          map((data) => {
            const products: Product[] = [];
            for (let key in data) {
                products.push({ ...data[key], id: key });
            }
            return products;
          })
        );
    }
  }