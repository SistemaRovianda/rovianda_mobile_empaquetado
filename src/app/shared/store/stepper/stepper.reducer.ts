import { createReducer } from "@ngrx/store";

export interface stepperState {
  steppers: number;
}

const initialState: stepperState = {
  steppers: 0,
};

// export const stepperReducer = createReducer<stepperState>
