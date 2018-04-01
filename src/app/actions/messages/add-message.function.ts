import { IAddMessageAction } from './i-add-message-action';

export function AddMessage(message: string): IAddMessageAction {
    return {
        type: 'ADD_MESSAGE',
        message: message,
    };
}
