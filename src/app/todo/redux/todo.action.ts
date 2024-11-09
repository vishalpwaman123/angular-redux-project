import { createAction, props } from '@ngrx/store';

export const insertNote = createAction(
  'insert',
  props<{ title: string; description: string }>()
);
export const editNote = createAction('edit');
export const deleteNote = createAction('delete');
