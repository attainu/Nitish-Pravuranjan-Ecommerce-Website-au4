import React, { Component } from 'react';
import { cartItemActions } from '../../Redux/actions/cart';
import { INCREMENT, DECREMENT, REMOVE_ITEM } from '../../Redux/actions/types';
import { connect } from 'react-redux';

class CartItem extends Component {
  render() {
    const { _id, name, productPic, price, total, count } = this.props.item;
    return (
      <div className='row my-1 text-capitalize text-center'>
        <div className='col-10 mx-auto col-lg-2'>
          <img
            src={productPic[0].img}
            style={{ width: '5rem', heigth: '5rem' }}
            className='img-fluid'
            alt=''
          />
        </div>
        <div className='col-10 mx-auto col-lg-2 '>
          <span className='d-lg-none'>product :</span> {name}
        </div>
        <div className='col-10 mx-auto col-lg-2 '>
          <strong>
            <span className='d-lg-none'>price :</span> ${price}
          </strong>
        </div>
        <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0 '>
          <div className='d-flex justify-content-center'>
            <div>
              <span
                className='btn btn-black mx-1'
                onClick={() => this.props.cartItemActions(_id, DECREMENT)}
              >
                -
              </span>
              <span className='btn btn-black mx-1'>{count}</span>
              <span
                className='btn btn-black mx-1'
                onClick={() => this.props.cartItemActions(_id, INCREMENT)}
              >
                +
              </span>
            </div>
          </div>
        </div>
        <div className='col-10 mx-auto col-lg-2 '>
          <div
            className=' cart-icon'
            onClick={() => this.props.cartItemActions(_id, REMOVE_ITEM)}
          >
            <i className='fas fa-trash' />
          </div>
        </div>

        <div className='col-10 mx-auto col-lg-2 '>
          <strong>item total : ${total} </strong>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartItem: state.cart,
  };
};
export default connect(mapStateToProps, { cartItemActions })(CartItem);
