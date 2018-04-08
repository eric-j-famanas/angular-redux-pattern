import { IReducer } from '../core/models/i-reducer';
import { ICounterAppState } from '../core/models/i-counter-app-state';
import { IAction } from '../core/models/i-action';
import { INCREMENT } from '../actions/counter/counter-increment.action';
import { DECREMENT } from '../actions/counter/counter-decrement.action';

const initialState: ICounterAppState = { counter: 0 };

export const CounterSwitchReducer: IReducer<ICounterAppState> =
    (state: ICounterAppState = initialState, action: IAction) => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, { counter: state.counter + 1 });
        case DECREMENT:
            return Object.assign({}, state, { counter: state.counter - 1 });
        default:
            return state;
    }
};
