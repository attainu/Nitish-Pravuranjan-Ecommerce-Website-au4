import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import products from './product';
export default combineReducers({
  alert,
  auth,
  products,
});
