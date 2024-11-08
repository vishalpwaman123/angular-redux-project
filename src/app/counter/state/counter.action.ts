import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment');
export const incrementByFive = createAction(
  'incrementByFive',
  props<{ count: number }>()
);
export const decrement = createAction('decrement');
export const decrementByFive = createAction(
  'decrementByFive',
  props<{ count: number }>()
);
export const reset = createAction('reset');
export const customCount = createAction(
  'customCount',
  props<{ count: number }>()
);
