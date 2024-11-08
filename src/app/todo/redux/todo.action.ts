import { createAction } from "@ngrx/store";

export const insertNote = createAction('insert');
export const editNote = createAction('edit');
export const deleteNote = createAction('delete')