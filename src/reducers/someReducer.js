import { SOME_ACTION } from '../types';

export function someReducer(state = [], action) {
  switch (action.type) {
    case SOME_ACTION:
      return action.sliceState;
    default:
      return state;
  }
}
