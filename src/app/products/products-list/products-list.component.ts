import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { AppState } from 'src/app/store/app.state';
import { loadProducts } from '../state/products.actions';
import { getProducts } from '../state/products.selector';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {
  products: Observable<Product[]> | undefined;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.products = this.store.select(getProducts);
    this.store.dispatch(loadProducts());
  }
}

