import { Product } from "src/app/shared/models/product.interface";
import { createReducer, on, Action } from "@ngrx/store";
import {
  loadProductsByPackaging,
  loadProductsByPackagingSuccess,
  loadProductsByPackagingError,
  clearProductsByPackaging,
} from "./products.actions";

export interface ProductsState {
  loading: boolean;
  products: Product[];
  error: string;
}

const initialState: ProductsState = {
  loading: false,
  products: [],
  error: null,
};

const _productsReducer = createReducer<ProductsState>(
  initialState,
  on(loadProductsByPackaging, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadProductsByPackagingSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
  })),
  on(loadProductsByPackagingError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(clearProductsByPackaging, (state) => ({
    ...state,
    products: [],
  }))
);

export function productsReducer(state: ProductsState, action: Action) {
  return _productsReducer(state, action);
}
