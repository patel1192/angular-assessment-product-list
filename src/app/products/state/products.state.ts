import { Product } from "src/app/model/product.model";

export interface ProductsState{
    products: Product[];
}

export const initialState: ProductsState = {
    products: [],
};