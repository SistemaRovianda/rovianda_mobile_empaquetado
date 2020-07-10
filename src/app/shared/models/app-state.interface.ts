import { LoginState } from "src/app/features/landing/store/login/login.reducer";
import { AuthenticationUser } from "./authentication-user.interface";
import { PresentationState } from "src/app/features/packaged/store/presentations/presentations.reducer";
import { ProductsPresentationState } from "src/app/features/packaged/store/products-presentation/products-presentation.reducer";

export interface AppState {
  login: LoginState;
  auth: AuthenticationUser;
  presentations: PresentationState;
  productsPresentation: ProductsPresentationState;
}
