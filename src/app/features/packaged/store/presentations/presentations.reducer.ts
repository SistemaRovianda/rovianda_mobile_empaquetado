import { Presentation } from "src/app/shared/models/presentation.interface";
import { createReducer, on } from "@ngrx/store";
import {
  loadPresentations,
  loadPresentationsSuccess,
  loadPresentationsError,
} from "./presentations.actions";

export interface PresentationState {
  loading: boolean;
  presentations: Presentation[];
  error: string;
}

const initialState: PresentationState = {
  loading: false,
  presentations: [],
  error: null,
};

export const presentationsReducer = createReducer<PresentationState>(
  initialState,
  on(loadPresentations, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadPresentationsSuccess, (state, { presentations }) => ({
    ...state,
    loading: false,
    presentations,
  })),
  on(loadPresentationsError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
