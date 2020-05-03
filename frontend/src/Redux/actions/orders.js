import { GET_ORDER_HISTORY, POST_ORDER } from './types';
import { setAlert } from './alert';
import axios from 'axios';
export const getOrderHistory = () => async (dispatch) => {
  try {
    let res = await axios.get('/api/order');
    dispatch({
      type: GET_ORDER_HISTORY,
      payload: res.data,
    });
  } catch (error) {
    let errors = error.response.data.errors;
    if (errors) {
      errors.forEach((e) => dispatch(setAlert(e.msg, 'danger')));
    }
  }
};
export const postOrder = (cartItems, paymentID, paymentStatus) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ cartItems, paymentID, paymentStatus });

  try {
    let res = await axios.post('/api/order', body, config);
    dispatch({
      type: POST_ORDER,
      payload: res.data,
    });
  } catch (error) {
    let errors = error.response.data.errors;
    if (errors) {
      errors.forEach((e) => dispatch(setAlert(e.msg, 'danger')));
    }
  }
};
