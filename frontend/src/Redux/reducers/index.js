import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import products from './product';
import cart from './cart';
export default combineReducers({
  alert,
  auth,
  products,
  cart,
});
