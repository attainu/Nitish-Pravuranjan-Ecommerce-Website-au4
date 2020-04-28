import {
  ADD_TO_CART,
  INCREMENT,
  DECREMENT,
  REMOVE_ITEM,
} from '../actions/types';

export default (state = [], action) => {
  let stateCopy = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [...state];
  let { type, payload } = action;
  let index, selectedProduct, product;
  switch (type) {
    case ADD_TO_CART:
      index = stateCopy.findIndex((item) => item._id === payload._id);
      if (index === -1) {
        product = { ...payload };
        product.total = payload.price;
        product.count = 1;
        stateCopy.push(product);
        localStorage.setItem('cartItems', JSON.stringify(stateCopy));
      }
      return stateCopy;
    case INCREMENT:
      index = state.findIndex((item) => item._id === payload);
      product = stateCopy[index];
      product.count = product.count + 1;
      product.total = product.count * product.price;
      stateCopy[index] = product;
      localStorage.setItem('cartItems', JSON.stringify(stateCopy));
      return stateCopy;
    case DECREMENT:
      index = stateCopy.findIndex((item) => item._id === payload);
      product = stateCopy[index];
      product.count = product.count - 1;
      if (product.count === 0) {
        stateCopy.splice(index, 1);
      } else {
        product.total = product.count * product.price;
      }
      localStorage.setItem('cartItems', JSON.stringify(stateCopy));
      return stateCopy;
    case REMOVE_ITEM:
      selectedProduct = stateCopy.find((item) => {
        return item._id === payload;
      });
      index = stateCopy.indexOf(selectedProduct);
      stateCopy.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(stateCopy));
      return stateCopy;
    default:
      return stateCopy;
  }
};
