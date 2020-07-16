import { AppState } from "src/app/shared/models/app-state.interface";
import { createSelector } from "@ngrx/store";

const PRODUCTS_STATE = (state: AppState) => state.products;

export const products_selector = createSelector(
  PRODUCTS_STATE,
  (state) => state.products
);
