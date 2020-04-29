import { ADD_TO_CART, CLEAR_CART } from './types';

export const addToCart = (id) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: id,
  });
};
export const cartItemActions = (id, type) => (dispatch) => {
  dispatch({
    type,
    payload: id,
  });
};
export const clearCart = () => (dispatch) => {
  dispatch({
    type: CLEAR_CART,
  });
};
