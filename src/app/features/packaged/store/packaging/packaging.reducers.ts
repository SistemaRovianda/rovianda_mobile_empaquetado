import { Packaging } from "src/app/shared/models/packaging.interface";
import { createReducer, on, Action } from "@ngrx/store";
import {
  loadPackaging,
  loadPackagingSuccess,
  loadPackagingError,
} from "./packaging.actions";

export interface PackagingState {
  loading: boolean;
  packagingList: Packaging[];
  error: string;
}

const initialState: PackagingState = {
  loading: false,
  packagingList: [],
  error: null,
};

const _packagingReducer = createReducer<PackagingState>(
  initialState,
  on(loadPackaging, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadPackagingSuccess, (state, { packagingList }) => ({
    ...state,
    loading: false,
    packagingList,
  })),
  on(loadPackagingError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function packagingReducer(state: PackagingState, action: Action) {
  return _packagingReducer(state, action);
}
