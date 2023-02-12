// import the interface
import { HeaderAction, HeaderActionType } from './header.actions';

export interface State {
  count: string,
  sort: string,
}

//create a dummy initial state
const initialState: State = {
    count: '12',
    sort: 'asc',
  }

export function headerReducer( state = initialState, action: HeaderAction) {
  switch (action.type) {
    case HeaderActionType.CHANGE_LIMIT:
      return {...state, count: action.payload};
    case HeaderActionType.CHANGE_SORT:
      return {...state, sort: action.payload};
    default:
      return state;
  }
}


export const getCount = (state: State) => state.count;
export const getSort = (state: State) => state.sort;
