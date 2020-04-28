import React, { Fragment, Component } from 'react';
import CartItem from './CartItem';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Cart extends Component {
  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to='/login' />;
    }
    return (
      <section>
        {this.props.cartItems.length > 0 && (
          <Fragment>
            <div className='container-fluid text-center d-none d-lg-block'>
              <div className='row '>
                <div className='col-10 mx-auto col-lg-2'>
                  <p className='text-uppercase'>products</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                  <p className='text-uppercase'>name of product</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                  <p className='text-uppercase'>price</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                  <p className='text-uppercase'>quantity</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                  <p className='text-uppercase'>remove</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                  <p className='text-uppercase'>total</p>
                </div>
              </div>
            </div>
            <div className='container-fluid'>
              {this.props.cartItems &&
                this.props.cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              <h3 className='text-right'>
                Total: $
                {this.props.cartItems.reduce(
                  (total, item) => total + item.total,
                  0
                )}
              </h3>
            </div>
          </Fragment>
        )}
        {!this.props.cartItems ||
          (this.props.cartItems.length === 0 && (
            <h1 className='text-center'>Cart Empty</h1>
          ))}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    cartItems: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
