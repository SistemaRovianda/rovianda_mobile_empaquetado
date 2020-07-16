import { LoginState } from "src/app/features/landing/store/login/login.reducer";
import { AuthenticationUser } from "./authentication-user.interface";
import { PackagingState } from "src/app/features/packaged/store/packaging/packaging.reducers";
import { ProductsState } from "src/app/features/packaged/store/products/products.reducer";

export interface AppState {
  login: LoginState;
  auth: AuthenticationUser;
  packaging: PackagingState;
  products: ProductsState;
}
