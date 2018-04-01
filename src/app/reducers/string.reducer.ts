import {IAction} from '../core/models/i-action';
import {IReducer} from '../core/models/i-reducer';

export const StringReducer: IReducer<string> = (state: string, action: IAction) => {
  return state;
};

