import { NumberSwitchReducer } from '../src/app/reducers/number-switch.reducer';
import { AdditionAction } from '../src/app/actions/addition.action';

console.log('Addition: ', NumberSwitchReducer(24, AdditionAction(37)));
