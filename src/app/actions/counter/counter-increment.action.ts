import { Action, ActionCreator } from 'redux';

export const INCREMENT = 'INCREMENT';

export const increment: ActionCreator<Action> = () => ({
    type: INCREMENT,
});

