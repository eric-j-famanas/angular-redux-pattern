import { IAction } from '../../core/models/i-action';

export interface IAddMessageAction extends IAction {
    message: string;
}
