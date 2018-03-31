import { NumberSwitchReducer } from '../src/app/reducers/number-switch.reducer';
import { IncrementAction } from '../src/app/actions/increment.action';
import { AdditionAction } from '../src/app/actions/addition.action';
import { DecrementAction } from '../src/app/actions/decrement.action';
import { VanillaStore } from '../src/app/core/vanilla-store';

const store = new VanillaStore<number>(NumberSwitchReducer, 0);

const unsubscribe = store.subscribe(() => {
    console.log('subscribed: ', store.state);
});

store.dispatch(IncrementAction);
store.dispatch(IncrementAction);
store.dispatch(AdditionAction(100)); // should be 102 now

unsubscribe();

store.dispatch(DecrementAction); // this won't log anything

console.log('Store State after unsubscribe', store.state); // should be 101 now
