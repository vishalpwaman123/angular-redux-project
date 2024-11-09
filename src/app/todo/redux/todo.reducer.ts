import { createReducer, on } from '@ngrx/store';
import { initialState, TodoList } from './todo.state';
import { deleteNote, insertNote, setIsEditFlag } from './todo.action';

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
  }),
  on(setIsEditFlag, (state, action) => {
    return {
      ...state,
      isEdit: action.isEdit,
      todoListId: action.todoListId,
    };
  }),
  on(deleteNote, (state, action) => {
    return {
      ...state,
      list: state.list.filter((x) => x.id !== action.todoListId),
    };
  })
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
