import {IReducer} from '../core/i-reducer';
import {IAction} from '../core/i-action';

export const NumberIncrementDecrement: IReducer<number> = (state: number, action: IAction) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }

  if (action.type === 'DECREMENT') {
    return state - 1;
  }

  return state;
};
