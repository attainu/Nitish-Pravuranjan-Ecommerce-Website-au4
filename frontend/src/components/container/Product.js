import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { connect } from 'react-redux';
import { updateProduct } from '../../Redux/actions/product';
import { addToCart } from '../../Redux/actions/cart';

class Product extends Component {
  render() {
    let { _id, name, productPic, price, inCart } = this.props.product;
    return (
      <div className='product-container'>
        <div className='image-container'>
          <Link to={`/${_id}`}>
            <img src={productPic[0].img} alt='' />
          </Link>
          <button
            className='cart-btn btn-outline-warning'
            disabled={inCart ? true : false}
            onClick={() => {
              this.props.updateProduct(_id);
              this.props.addToCart(this.props.product);
            }}
          >
            {inCart ? (
              <p className='text-capitalize mb-0' disabled>
                in cart
              </p>
            ) : (
              <i className='fas fa-cart-plus' />
            )}
          </button>
        </div>
        <div className='card-footer d-flex justify-content-between'>
          <h6 className='align-self-center mb-0'>{name}</h6>
          <h6 className='text-blue font-italic mb-0'>
            <span className='mr-1'>$</span>
            {price}
          </h6>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});
export default connect(mapStateToProps, { updateProduct, addToCart })(Product);
