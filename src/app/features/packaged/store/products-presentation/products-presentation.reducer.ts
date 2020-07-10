import { ProductPresentation } from "src/app/shared/models/packaged.interface";
import { createReducer, on } from "@ngrx/store";
import { addProductPresentation } from "./products-presentation.actions";

export interface ProductsPresentationState {
  loading: boolean;
  productsPresentation: ProductPresentation[];
  error: string;
}

const initialState: ProductsPresentationState = {
  loading: false,
  productsPresentation: [],
  error: null,
};

export const productsPresentationReducer = createReducer<
  ProductsPresentationState
>(
  initialState,
  on(addProductPresentation, (state, { productPresentation }) => ({
    ...state,
    productsPresentation: [...state.productsPresentation, productPresentation],
  }))
);
