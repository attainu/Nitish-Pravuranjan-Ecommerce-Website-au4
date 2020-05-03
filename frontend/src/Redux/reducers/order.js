import { GET_ORDER_HISTORY, POST_ORDER } from '../actions/types';

export default (state = [], action) => {
  let { type, payload } = action;
  let stateCopy = [...state];
  switch (type) {
    case GET_ORDER_HISTORY:
      return [...payload];
    case POST_ORDER:
      return [...stateCopy, payload];
    default:
      return stateCopy;
  }
};
