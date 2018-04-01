import { NumberSwitchReducer } from '../src/app/reducers/number-switch.reducer';
import { AdditionAction } from '../src/app/actions/number/addition.action';

console.log('Addition: ', NumberSwitchReducer(24, AdditionAction(37)));
