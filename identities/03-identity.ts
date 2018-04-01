import { NumberIncrementDecrement } from '../src/app/reducers/number-id.reducer';
import { DecrementAction } from '../src/app/actions/number/decrement.action';
import { IncrementAction } from '../src/app/actions/number/increment.action';

console.log('Increment: ',
    NumberIncrementDecrement(3, DecrementAction)
);

console.log('Decrement: ',
    NumberIncrementDecrement(3, IncrementAction)
);
