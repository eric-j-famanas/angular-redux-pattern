import { IAction } from '../../core/models/i-action';

export interface IDeleteMessageAction extends IAction {
    index: number;
}
