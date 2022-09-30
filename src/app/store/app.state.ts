import { productsReducer } from "../products/state/products.reducer";
import { ProductsState } from "../products/state/products.state";


export interface AppState {
    products: ProductsState;
}

export const appReducer = {
    products: productsReducer,
};