import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const Cart = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Redirect to='/login' />;
  }
  return <div>Cart</div>;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Cart);
