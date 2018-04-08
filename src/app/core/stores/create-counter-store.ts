import { ICounterAppState } from '../models/i-counter-app-state';
import { Store, createStore, compose, StoreEnhancer } from 'redux';
import { CounterSwitchReducer } from '../../reducers/counter-switch.reducer';

const devtools: StoreEnhancer<ICounterAppState> =
    window['devToolsExtension'] ?
        window['devToolsExtension']() : f => f;

export function createCounterStore(): Store<ICounterAppState> {
    return createStore<ICounterAppState>(
        CounterSwitchReducer,
        compose(devtools)
    );
}

