import { initialState } from "./products.state";
import { createReducer, on } from "@ngrx/store";
import { loadProductsSuccess } from "./products.actions";

const _productsReducer = createReducer(
    initialState,
    on(loadProductsSuccess, (state, action) => {
      return {
        ...state,
        products: action.products,
      };
    })
  );
  
  export function productsReducer(state: any, action: any){
    return _productsReducer(state, action);
  }




  