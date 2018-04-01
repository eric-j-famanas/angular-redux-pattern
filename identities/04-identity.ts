import { NumberSwitchReducer } from '../src/app/reducers/number-switch.reducer';
import { IncrementAction } from '../src/app/actions/number/increment.action';
import { DecrementAction } from '../src/app/actions/number/decrement.action';

console.log('Increment: ', NumberSwitchReducer(99, IncrementAction));
console.log('Decrement: ', NumberSwitchReducer(99, DecrementAction));
