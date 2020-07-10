import { createAction, props } from "@ngrx/store";
import { Presentation } from "src/app/shared/models/presentation.interface";
const LOAD_PRESENTATIONS = "[Presentations] Load Presentations";

const LOAD_PRESENTATIONS_SUCCESS = "[Presentations] Load Presentations Success";

const LOAD_PRESENTATIONS_ERROR = "[Presentations] Load Presentations Error";

export const loadPresentations = createAction(
  LOAD_PRESENTATIONS,
  props<{ productId: string }>()
);

export const loadPresentationsSuccess = createAction(
  LOAD_PRESENTATIONS_SUCCESS,
  props<{ presentations: Presentation[] }>()
);

export const loadPresentationsError = createAction(
  LOAD_PRESENTATIONS_ERROR,
  props<{ error: string }>()
);
