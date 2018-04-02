import { ObservableStore } from '../src/app/core/stores/observable-store';
import { MessageSwitchReducer } from '../src/app/reducers/message-switch.reducer';
import { AddMessage } from '../src/app/actions/messages/add-message.function';
import { DeleteMessage } from '../src/app/actions/messages/delete-message.function';

const store = new ObservableStore(MessageSwitchReducer, { messages: []});
const sub = store.subscribe((changes) => console.log(changes));

store.dispatch(AddMessage('Would you say the fringe was made of silk?'));

store.dispatch(AddMessage('Would not have no other kind but silk.'));

store.dispatch(AddMessage('Has it really got a team of snow white horses?'));

sub.unsubscribe();

store.dispatch(DeleteMessage(2));

store.dispatch(AddMessage('Has it really got a team of midnight black horses?'));

console.log(store.state);
