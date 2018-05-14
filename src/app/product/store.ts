import { ADD_PRODUCT, DELETE_PRODUCT } from './actions';

export interface IProductState {
  products;
}

export const PRODUCT_INITIAL_STATE: IProductState = {
  products: []
};

export function productReducer(
  state: IProductState = PRODUCT_INITIAL_STATE,
  action
): IProductState {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct = action.body;
      return { products: state.products.concat(newProduct) };
    default:
      return state;
  }
}
