import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.state';
export const PRODUCT_STATE_NAME = 'products';
const getProductsState = createFeatureSelector<ProductsState>(PRODUCT_STATE_NAME);

export const getProducts = createSelector(getProductsState, (state) => {
  return state.products;
});