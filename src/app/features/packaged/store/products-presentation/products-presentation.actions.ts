import { createAction, props } from "@ngrx/store";
import { ProductPresentation } from "src/app/shared/models/packaged.interface";
import { create } from "domain";

const ADD_PRODUCT_PRESENTATION =
  "[Product-presentation] Add Product Presentation";

const LOAD_PRODUCTS_PRESENTATION =
  "[Product-presentation] Load Product Presentation";

const LOAD_PRODUCTS_PRESENTATION_SUCCESS =
  "[Product-presentation] Load Product Presentation";

export const addProductPresentation = createAction(
  ADD_PRODUCT_PRESENTATION,
  props<{ productPresentation: ProductPresentation }>()
);

export const loadProductsPresentation = createAction(
  LOAD_PRODUCTS_PRESENTATION
);

export const loadProductsPresentationSuccess = createAction(
  LOAD_PRODUCTS_PRESENTATION_SUCCESS,
  props<{ productsPresentation: ProductPresentation[] }>()
);
