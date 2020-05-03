import { GET_PRODUCTS, UPDATE_PRODUCT } from './types';
import { setAlert } from './alert';
import Axios from 'axios';
export const getProducts = () => async (dispatch) => {
  try {
    let product = await Axios.get('/api/product');
    dispatch({
      type: GET_PRODUCTS,
      payload: product.data,
    });
  } catch (error) {
    let errors = error.response.data.errors;
    if (errors) {
      errors.forEach((err) => dispatch(setAlert(err.msg, 'danger')));
    }
  }
};

export const updateProduct = (product) => (dispatch) => {
  dispatch({
    type: UPDATE_PRODUCT,
    payload: product,
  });
};
