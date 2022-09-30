import { Injectable } from "@angular/core";
import { map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadProducts, loadProductsSuccess } from './products.actions';
import { ProductsService } from "src/app/services/products.service";

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private productsService: ProductsService) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProducts),
      mergeMap((action) => {
        return this.productsService.getProducts().pipe(
          map((products) => {
            return loadProductsSuccess({ products });
          })
        );
      })
    );
  });
}

