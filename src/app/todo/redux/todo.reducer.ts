import { createReducer, on } from '@ngrx/store';
import { initialState, TodoList } from './todo.state';
import { insertNote } from './todo.action';

const _todoReducer = createReducer(
  initialState,
  on(insertNote, (state, action) => {
    const newNote = {
      id: state.list.length + 1,
      title: action.title,
      description: action.description,
    };
    return {
      ...state,
      list: [...state.list, newNote],
    };
  })
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
