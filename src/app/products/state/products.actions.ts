import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/model/product.model";

export const LOAD_PRODUCTS = '[products page] load products';
export const LOAD_PRODUCTS_SUCCESS = '[products page] load products success';

export const loadProducts = createAction(LOAD_PRODUCTS);
export const loadProductsSuccess = createAction(
    LOAD_PRODUCTS_SUCCESS,
    props<{ products: Product[] }>()
    );