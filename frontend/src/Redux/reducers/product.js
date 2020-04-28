import {
  GET_PRODUCTS,
  UPDATE_PRODUCT,
  REMOVE_ITEM,
  DECREMENT,
  USER_LOADED,
} from '../actions/types';

export default (state = [], action) => {
  let stateCopy = [...state];
  let { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      stateCopy = [...payload];
      stateCopy.forEach((product) => {
        product.inCart = false;
      });
      return stateCopy;
    case UPDATE_PRODUCT:
      let index = stateCopy.findIndex((item) => item._id === payload);
      stateCopy[index].inCart = true;
      return stateCopy;
    case REMOVE_ITEM:
    case DECREMENT:
    case USER_LOADED:
      setTimeout(() => {
        let cartItems = localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : [];

        if (!cartItems.length) {
          stateCopy.forEach((product) => {
            product.inCart = false;
          });
        } else {
          for (let item of stateCopy) {
            for (let cartItem of cartItems) {
              if (cartItem._id !== item._id) {
                item.inCart = false;
              } else {
                item.inCart = true;
              }
            }
          }
        }

        return stateCopy;
      }, 200);
    // eslint-disable-next-line
    default:
      return stateCopy;
  }
};
