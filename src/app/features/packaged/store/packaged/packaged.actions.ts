import { createAction, props } from "@ngrx/store";
import { Packaged } from "src/app/shared/models/packaged.interface";

const PACKAGED_NEW_REGISTER = "[PACKAGED] New Register";

const PACKAGED_NEW_REGISTER_SUCCES = "[PACKAGED] New Packaged Success";

export const packagedNewRegister = createAction(
  PACKAGED_NEW_REGISTER,
  props<{ packaged: Packaged }>()
);

export const packagedNewRegisterSuccess = createAction(
  PACKAGED_NEW_REGISTER_SUCCES
);
