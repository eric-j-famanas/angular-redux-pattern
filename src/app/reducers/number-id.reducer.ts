import {IReducer} from '../core/models/i-reducer';
import {IAction} from '../core/models/i-action';

export const NumberIncrementDecrement: IReducer<number> = (state: number, action: IAction) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }

  if (action.type === 'DECREMENT') {
    return state - 1;
  }

  return state;
};
