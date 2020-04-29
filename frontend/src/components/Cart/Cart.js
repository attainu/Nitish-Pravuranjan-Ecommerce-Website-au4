import React, { Fragment, Component } from 'react';
import CartItem from './CartItem';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PaypalButton from './PaypalBtn';
import { clearCart } from '../../Redux/actions/cart';

class Cart extends Component {
  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to='/login' />;
    }
    let total = this.props.cartItems.reduce(
      (total, item) => total + item.total,
      0
    );
    return (
      <section>
        {this.props.cartItems.length > 0 && (
          <Fragment>
            <div className='container text-center d-none d-lg-block pt-5 '>
              <div className='row cart-header p-3'>
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
            <div className='container  justify-content-center text-center mx-auto item-center cart-body p-5'>
              {this.props.cartItems &&
                this.props.cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
            </div>
            <div className='container text-center d-none d-lg-block pt-5 '>
              <div className='row'>
                <div className='col-lg-2 mx-auto col-md-6 col-10 mr-lg-0 text-center'>
                  <h3>Total: ${total}</h3>
                  <PaypalButton
                    total={total}
                    clearCart={this.props.clearCart}
                  />
                </div>
              </div>
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

export default connect(mapStateToProps, { clearCart })(Cart);
