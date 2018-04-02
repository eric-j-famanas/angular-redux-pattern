import { IMessagingAppState } from '../src/app/core/models/i-messaging-app-state';
import { MessageSwitchReducer } from '../src/app/reducers/message-switch.reducer';
import { VanillaStore } from '../src/app/core/stores/vanilla-store';
import { AddMessage } from '../src/app/actions/messages/add-message.function';

const store = new VanillaStore<IMessagingAppState>(MessageSwitchReducer, { messages: [] });

store.dispatch(AddMessage('Would you say the fringe was made of silk?'));

store.dispatch(AddMessage('Would not have no other kind but silk.'));

store.dispatch(AddMessage('Has it really got a team of snow white horses?'));

console.log(store.state);


