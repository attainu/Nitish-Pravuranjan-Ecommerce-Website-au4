import React from 'react';
import OrderDetail from './OrderDetail';
import { Redirect } from 'react-router-dom';
import Order from './Order';
import { connect } from 'react-redux';
import { getOrderHistory } from '../../Redux/actions/orders';
class OrderHistory extends React.Component {
  state = {
    cartItems: '',
  };

  handleCartItem = (cartItems) => {
    this.setState({ cartItems });
  };

  componentDidMount() {
    this.props.getOrderHistory();
  }
  render() {
    if (!this.props.authenticated) {
      this.props.history.push('/orders');
      return <Redirect to='/login' />;
    }
    return (
      <div>
        <OrderDetail cartItems={this.state.cartItems} />
        <Order cartItems={this.handleCartItem} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { getOrderHistory })(OrderHistory);
