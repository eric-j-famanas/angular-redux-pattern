import {NumberSwitchReducer} from '../src/app/reducers/number-switch.reducer';
import {Store} from '../src/app/core/store';
import {IncrementAction} from '../src/app/actions/increment.action';
import {DecrementAction} from '../src/app/actions/decrement.action';
import {AdditionAction} from '../src/app/actions/addition.action';

const store = new Store<number>(NumberSwitchReducer, 0);

console.log('Default state: ', store.state);
store.dispatch(IncrementAction);
console.log('Incremented state: ', store.state);
store.dispatch(DecrementAction);
console.log('Decremented state: ', store.state);
store.dispatch(AdditionAction(200));
console.log('Addition state: ', store.state);
