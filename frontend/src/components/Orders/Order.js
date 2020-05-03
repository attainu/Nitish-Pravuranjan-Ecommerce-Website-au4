import React, { Component } from 'react';
import { connect } from 'react-redux';

class Order extends Component {
  render() {
    if (!this.props.orders.length) {
      return <h1>No order history found</h1>;
    } else {
      return (
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col-auto'>
              <table className='table table-striped table-responsive'>
                <thead className='text-center'>
                  <tr>
                    <th>OrderID</th>
                    <th>PaymentID</th>
                    <th>Ordered Items</th>
                    <th>Payment Status</th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                  {this.props.orders.map((order) => {
                    return (
                      <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.paymentID}</td>
                        <td>
                          <button
                            className='btn btn-outline-dark'
                            onClick={() =>
                              this.props.cartItems(order.cartItems)
                            }
                          >
                            Cart Items
                          </button>
                        </td>
                        <td>{order.paymentStatus ? 'success' : 'failed'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders,
  authenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Order);
