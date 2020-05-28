import { LoginState } from "src/app/features/landing/store/login/login.reducer";
import { AuthenticationUser } from "./authentication-user.interface";

export interface AppState {
  login: LoginState;
  auth: AuthenticationUser;
}
