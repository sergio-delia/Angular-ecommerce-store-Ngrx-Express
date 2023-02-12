import { Action } from '@ngrx/store';

export enum HeaderActionType {
  CHANGE_LIMIT = '[HEADER] Change limit',
  CHANGE_SORT = '[HEADER] Change sort'
}

export class ChangeLimitAction implements Action {
  readonly type = HeaderActionType.CHANGE_LIMIT;
  //add an optional payload
  constructor(public payload: string) {}
}

export class ChangeSortAction implements Action {
  readonly type = HeaderActionType.CHANGE_SORT

  constructor(public payload: string){}
}

export type HeaderAction = ChangeLimitAction | ChangeSortAction;