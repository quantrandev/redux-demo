import {
  IProductState,
  productReducer,
  PRODUCT_INITIAL_STATE
} from './product/store';
import { combineReducers } from 'redux';

export interface IAppState {
  product: IProductState;
}

export const INITIAL_STATE: IAppState = {
  product: PRODUCT_INITIAL_STATE
};

export const rootReducer = combineReducers({
  product: productReducer
});
