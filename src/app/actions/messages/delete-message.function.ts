import { IDeleteMessageAction } from './i-delete-message-action';

export function DeleteMessage(index: number): IDeleteMessageAction {
    return {
        type: 'DELETE_MESSAGE',
        index: index
    };
}
