import { Packaged } from "src/app/shared/models/packaged.interface";
import { createReducer, on } from "@ngrx/store";
import {
  packagedNewRegister,
  packagedNewRegisterSuccess,
} from "./packaged.actions";

export interface PackagedState {
  loading: boolean;
  packaged: Packaged;
  error: string;
}

const initialState: PackagedState = {
  loading: false,
  packaged: null,
  error: null,
};

export const packagedReducer = createReducer<PackagedState>(
  initialState,
  on(packagedNewRegister, (state) => ({
    ...state,
    loading: true,
  })),
  on(packagedNewRegisterSuccess, (state) => ({
    ...state,
    loading: false,
  }))
);
