import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/shared/models/product.interface";

const LOAD_PRODUCTS_BY_PACKAGING = "[Packaging] Load Products by Packaging";

const LOAD_PRODUCTS_BY_PACKAGING_SUCCESS =
  "[Packaging] Load Products by Packaging Success";

const LOAD_PRODUCTS_BY_PACKAGING_ERROR =
  "[Packaging] Load Products by Packaging Error";

const CLEAR_PRODUCTS_BY_PACKAGING = "[Packaging] Clear Products by Packaging";

export const loadProductsByPackaging = createAction(
  LOAD_PRODUCTS_BY_PACKAGING,
  props<{ userId: string }>()
);

export const loadProductsByPackagingSuccess = createAction(
  LOAD_PRODUCTS_BY_PACKAGING_SUCCESS,
  props<{ products: Product[] }>()
);

export const loadProductsByPackagingError = createAction(
  LOAD_PRODUCTS_BY_PACKAGING_ERROR,
  props<{ error: string }>()
);

export const clearProductsByPackaging = createAction(
  CLEAR_PRODUCTS_BY_PACKAGING
);
