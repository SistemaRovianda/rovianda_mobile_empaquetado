import { AppState } from "src/app/shared/models/app-state.interface";
import { createSelector } from "@ngrx/store";

const SELECT_PRODUCTS_PRESENTATION = (state: AppState) =>
  state.productsPresentation;

export const productsPresentationSelector = createSelector(
  SELECT_PRODUCTS_PRESENTATION,
  (state) => state.productsPresentation
);
