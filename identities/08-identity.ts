import { ObservableStore } from '../src/app/core/observable-store';
import { NumberSwitchReducer } from '../src/app/reducers/number-switch.reducer';
import { AdditionAction } from '../src/app/actions/addition.action';
import { IncrementAction } from '../src/app/actions/increment.action';
import { DecrementAction } from '../src/app/actions/decrement.action';

const store = new ObservableStore<number>(NumberSwitchReducer, 0);

const sub = store.subscribe((value => console.log(value)));

store.dispatch(IncrementAction);
store.dispatch(IncrementAction);
store.dispatch(AdditionAction(100)); // should be 102 now

sub.unsubscribe();

store.dispatch(DecrementAction); // this won't log anything

console.log('Store State after unsubscribe', store.state); // should be 101 now
