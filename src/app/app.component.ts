import { Component, Inject } from '@angular/core';
import { CounterAppStore } from './core/stores/counter-store.token';
import { ICounterAppState } from './core/models/i-counter-app-state';
import { Store } from 'redux';
import { increment } from './actions/counter/counter-increment.action';
import { decrement } from './actions/counter/counter-decrement.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public counter: number;

    constructor(@Inject(CounterAppStore) private store: Store<ICounterAppState>) {
        store.subscribe(() => this.readState());
        this.readState();
    }

    public readState() {
        const state: ICounterAppState = this.store.getState();
        this.counter = state.counter;
    }

    public increment() {
        this.store.dispatch(increment());
    }

    public decrement() {
        this.store.dispatch(decrement());
    }
}
