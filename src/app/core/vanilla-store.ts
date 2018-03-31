import {IReducer} from './i-reducer';
import {IAction} from './i-action';
import {IListerCallback} from './i-lister-callback';
import {IUnsubscribeCallback} from './i-unsubscribe-callback';

export class VanillaStore<TItem> {
  private _state: TItem;
  private _listeners: IListerCallback[] = [];

  constructor(
    private reducer: IReducer<TItem>,
    initialState: TItem

  ) {
    this._state = initialState;
  }

  public get state(): TItem {
    return this._state;
  }

  /**
   * The dispatch function is how the state of the store is altered. Pass an action
   * to the dispatch and the store's reducer it was constructed with will handle the
   * state change.
   *
   * @param {IAction} action
   */
  public dispatch(action: IAction): void {

    // Here is where the reducer updates the state
    this._state = this.reducer(this._state, action);

    // Whenever the state of the store is changed, each listener is notified
    // using the callback
    this._listeners.forEach((listenerCallback: IListerCallback) => {
      listenerCallback();
    });
  }


  /**
   * The subscribe function will take a listener callback, add it to the store's list
   * of listeners, and return an unsubscribe callback.
   *
   * @param {IListerCallback} listenerCallback
   * @returns {IUnsubscribeCallback}
   */
  public subscribe(listenerCallback: IListerCallback): IUnsubscribeCallback {
    this._listeners.push(listenerCallback);

    return () => {
      // The returned value will return an updated list of listeners which excludes
      // the listener just added
      this._listeners = this._listeners
        .filter((listener: IListerCallback) => {
          return listener !== listenerCallback;
      });
    };
  }
}
