import {IAction} from './i-action';


export interface IReducer<TItem> {
    (state: TItem, action: IAction): TItem;
}
