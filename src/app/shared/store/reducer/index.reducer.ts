import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "../../models/app-state.interface";
import { authenticationReducer } from "src/app/features/landing/store/authentication/authentication.reducer";
import { loginReducer } from "src/app/features/landing/store/login/login.reducer";
import { presentationsReducer } from "src/app/features/packaged/store/presentations/presentations.reducer";
import { productsPresentationReducer } from "src/app/features/packaged/store/products-presentation/products-presentation.reducer";

export const reducers: ActionReducerMap<AppState> = {
  auth: authenticationReducer,
  login: loginReducer,
  presentations: presentationsReducer,
  productsPresentation: productsPresentationReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
