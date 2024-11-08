import { createReducer, on } from '@ngrx/store';
import { initialState } from './todo.state';
import { insertNote } from './todo.action';

const _todoReducer = createReducer(
  initialState,
  on(insertNote, (state) => {
    return {
      ...state,
      list: state.list,
    };
  }),
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
