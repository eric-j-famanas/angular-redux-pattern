import {IAction} from '../../core/models/i-action';

export function AdditionAction(value: number): IAction {
  return {
    type: 'ADDITION',
    payload: value,
  };
}

