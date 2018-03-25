import {IAction} from '../core/i-action';

export function AdditionAction(value: number): IAction {
  return {
    type: 'ADDITION',
    payload: value,
  };
}

