import { IReducer } from './i-reducer';
import { IAction } from './i-action';
import { Subject } from 'rxjs/Subject';
import { scan } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class ObservableStore<TItem> extends BehaviorSubject<TItem> {
    private _dispatcher: Subject<IAction>;

    constructor(private _reducer: IReducer<TItem>,
                initialState: TItem) {

        super(initialState);

        this._dispatcher = new Subject<IAction>();
        this._dispatcher.pipe(
            scan(
                (state: TItem, action: IAction) => this._reducer(state, action),
                initialState))
            .subscribe((state) => super.next(state));
    }

    public get state(): TItem {
        return this.value;
    }

    /**
     * The dispatch function is how the state of the store is altered. Pass an action
     * to the dispatch and the store's reducer it was constructed with will handle the
     * state change.
     *
     * @param {IAction} action
     */
    public dispatch(action: IAction): void {
        this._dispatcher.next(action);
    }
}
