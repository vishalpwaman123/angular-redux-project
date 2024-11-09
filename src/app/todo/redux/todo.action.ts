import { createAction, props } from '@ngrx/store';

export const insertNote = createAction(
  'insert',
  props<{ title: string; description: string }>()
);
export const editNote = createAction('edit');
export const deleteNote = createAction(
  'delete',
  props<{ todoListId: number }>()
);
export const setIsEditFlag = createAction(
  'setIsEdit',
  props<{ isEdit: boolean; todoListId: number }>()
);
