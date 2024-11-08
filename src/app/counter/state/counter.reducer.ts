import { createReducer, on } from '@ngrx/store';
import {
  customCount,
  decrement,
  decrementByFive,
  increment,
  incrementByFive,
  reset,
} from './counter.action';
import { initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(incrementByFive, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.count,
    };
  }),
  on(decrementByFive, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.count,
    };
  }),
  on(customCount, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.count,
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
