import {IAction} from '../core/i-action';
import {IReducer} from '../core/i-reducer';

export const StringReducer: IReducer<string> = (state: string, action: IAction) => {
  return state;
}
