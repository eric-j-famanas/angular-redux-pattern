import {IReducer} from '../core/models/i-reducer';
import {IAction} from '../core/models/i-action';

export const NumberSwitchReducer: IReducer<number> = (state: number, action: IAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'ADDITION':
      return state + action.payload;
    default:
      return state;
  }
};

