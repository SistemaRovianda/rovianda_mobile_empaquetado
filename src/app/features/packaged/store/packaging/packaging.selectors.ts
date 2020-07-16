import { AppState } from "src/app/shared/models/app-state.interface";
import { createSelector } from "@ngrx/store";

const PACKAGING_STATE = (state: AppState) => state.packaging;

export const packagingSelect = createSelector(
  PACKAGING_STATE,
  (state) => state.packagingList
);
