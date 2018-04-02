import { Action, Reducer, Store, createStore } from 'redux';
import { IMessagingAppState } from '../src/app/core/models/i-messaging-app-state';
import { AddMessage } from '../src/app/actions/messages/add-message.function';
import { IAddMessageAction } from '../src/app/actions/messages/i-add-message-action';
import { IDeleteMessageAction } from '../src/app/actions/messages/i-delete-message-action';


/**
 * In this file we are using real redux methods from the redux library to create the workflow of an identity.
 * The primary difference is that Action, Reducer, Store, and createStore are taken directly from the redux
 * library instead of manually creating the files.
 */

const initialState: IMessagingAppState = { messages: [] };

const reducer: Reducer<IMessagingAppState> =
    (state: IMessagingAppState = initialState, action: Action) => {
        switch (action.type) {
            case 'ADD_MESSAGE':
                return {
                    messages: state.messages.concat((<IAddMessageAction>action).message),
                };
            case 'DELETE_MESSAGE':
                let idx = (<IDeleteMessageAction>action).index;
                return {
                    messages: [
                        ...state.messages.slice(0, idx),
                        ...state.messages.slice(idx + 1, state.messages.length)
                    ]
                };
            default:
                return state;
        }
    };

const store: Store<IMessagingAppState> = createStore<IMessagingAppState>(reducer);

console.log(store.getState());

store.dispatch(AddMessage('Would you say the fringe was made of silk?'));

store.dispatch(AddMessage('Would not have no other kind but silk.'));

store.dispatch(AddMessage('Has it really got a team of snow white horses?'));

console.log(store.getState());
