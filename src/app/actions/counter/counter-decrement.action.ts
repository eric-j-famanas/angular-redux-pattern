import { Action, ActionCreator } from 'redux';

export const DECREMENT = 'DECREMENT';

export const decrement: ActionCreator<Action> = () => ({
    type: DECREMENT,
});
