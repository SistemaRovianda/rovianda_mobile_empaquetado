import { createAction, props } from "@ngrx/store";
import { Packaging } from "src/app/shared/models/packaging.interface";

const LOAD_PACKAGING = "[Packaging] Load packaging";

const LOAD_PACKAGING_SUCCESS = "[Packaging] Load Packaging Success";

const LOAD_PACKAGING_ERROR = "[Packaging] Load Packaging Error";

const PACKAGING_SERVICED = "[Packaging] Packaging Serviced";

export const loadPackaging = createAction(LOAD_PACKAGING);

export const loadPackagingSuccess = createAction(
  LOAD_PACKAGING_SUCCESS,
  props<{ packagingList: Packaging[] }>()
);

export const loadPackagingError = createAction(
  LOAD_PACKAGING_ERROR,
  props<{ error: string }>()
);

export const packagingServiced = createAction(
  PACKAGING_SERVICED,
  props<{ userId: string }>()
);
