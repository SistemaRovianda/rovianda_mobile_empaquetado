import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "../../models/app-state.interface";
import { authenticationReducer } from "src/app/features/landing/store/authentication/authentication.reducer";
import { loginReducer } from "src/app/features/landing/store/login/login.reducer";
import { packagingReducer } from "src/app/features/packaged/store/packaging/packaging.reducers";
import { productsReducer } from "src/app/features/packaged/store/products/products.reducer";

export const reducers: ActionReducerMap<AppState> = {
  auth: authenticationReducer,
  login: loginReducer,
  packaging: packagingReducer,
  products: productsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
