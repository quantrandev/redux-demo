import { INCREMENT, DECREMENT } from './actions';

export interface IAppState {
  counter: number;
}

export function rootReducer(state: IAppState, action: any): IAppState {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
  }
  return state;
}
