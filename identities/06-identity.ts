import { NumberSwitchReducer } from '../src/app/reducers/number-switch.reducer';
import { IncrementAction } from '../src/app/actions/increment.action';
import { DecrementAction } from '../src/app/actions/decrement.action';
import { AdditionAction } from '../src/app/actions/addition.action';
import { VanillaStore } from '../src/app/core/vanilla-store';

const store = new VanillaStore<number>(NumberSwitchReducer, 0);

console.log('Default state: ', store.state);
store.dispatch(IncrementAction);
console.log('Incremented state: ', store.state);
store.dispatch(DecrementAction);
console.log('Decremented state: ', store.state);
store.dispatch(AdditionAction(200));
console.log('Addition state: ', store.state);
