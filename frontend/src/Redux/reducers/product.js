import { GET_PRODUCTS } from '../actions/types';

export default (state = [], action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      let stateCopy = [...payload];
      stateCopy.forEach((product) => {
        product.inCart = false;
      });
      return stateCopy;
    default:
      return state;
  }
};
