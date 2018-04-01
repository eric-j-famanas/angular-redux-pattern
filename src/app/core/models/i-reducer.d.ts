import { IAction } from './i-action';

export type IReducer<TItem> = (state: TItem, action: IAction) => TItem;
