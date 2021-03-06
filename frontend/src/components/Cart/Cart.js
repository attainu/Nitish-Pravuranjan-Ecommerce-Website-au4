import React, { Fragment, Component } from 'react';
import CartItem from './CartItem';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PaypalButton from './PaypalBtn';
import { clearCart } from '../../Redux/actions/cart';
import { postOrder } from '../../Redux/actions/orders';

class Cart extends Component {
  render() {
    if (!this.props.isAuthenticated) {
      this.props.history.push('/cart');
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
            <div className='container text-center d-none d-lg-block'>
              <div className='row pt-5'>
                <div className='col-10 mx-auto col-lg-2 '>
                  <p className=' badge badge-pill badge-secondary text-uppercase'>
                    products
                  </p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                  <p className=' badge badge-pill badge-secondary text-uppercase'>
                    name of product
                  </p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                  <p className=' badge badge-pill badge-secondary text-uppercase'>
                    price
                  </p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                  <p className=' badge badge-pill badge-info text-uppercase'>
                    quantity
                  </p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                  <p className=' badge badge-pill badge-warning text-uppercase'>
                    remove
                  </p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                  <p className=' badge badge-pill badge-success text-uppercase'>
                    total
                  </p>
                </div>
              </div>
            </div>
            <div className='container cart-list'>
              {this.props.cartItems &&
                this.props.cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
            </div>
            <div className='container pt-3'>
              <div className='row'>
                <div className='col-lg-2 mx-auto col-md-6 col-10 mr-lg-0 text-center'>
                  <button
                    className='btn btn-outline-success'
                    onClick={this.props.clearCart}
                  >
                    Clear cart
                  </button>
                  <h3 className='mt-2'>Total: ${total}</h3>
                  <PaypalButton
                    total={total}
                    clearCart={this.props.clearCart}
                    postOrder={this.props.postOrder}
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

export default connect(mapStateToProps, { clearCart, postOrder })(Cart);
