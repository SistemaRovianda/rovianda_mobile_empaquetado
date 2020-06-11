import { createAction, props } from "@ngrx/store";

const INIT_STEPPERS = "[Stepper] Init stppers";

const NEXT_STEP = "[Stepper] Next Step";

const PREV_STEP = "[Stepper] Prev Step";

export const initSteppers = createAction(
  INIT_STEPPERS,
  props<{ steppers: number }>()
);

export const nextStep = createAction(NEXT_STEP);

export const prevStep = createAction(PREV_STEP);
