import { IReducer } from '../core/models/i-reducer';
import { IMessagingAppState } from '../core/models/i-messaging-app-state';
import { IAction } from '../core/models/i-action';
import { IAddMessageAction } from '../actions/messages/i-add-message-action';
import { IDeleteMessageAction } from '../actions/messages/i-delete-message-action';

export const MessageSwitchReducer: IReducer<IMessagingAppState> = (state: IMessagingAppState, action: IAction) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                messages: state.messages.concat((<IAddMessageAction>action).message),
            };
        case 'DELETE_MESSAGE':
            const idx = (<IDeleteMessageAction>action).index;
            return {
                messages: [
                    ...state.messages.slice(0, idx),
                    ...state.messages.slice(idx + 1, state.messages.length)
                ],
            };
    }
};
