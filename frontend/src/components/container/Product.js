import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateProduct } from '../../Redux/actions/product';
import { addToCart } from '../../Redux/actions/cart';

class Product extends Component {
  render() {
    let { _id, name, productPic, price, inCart } = this.props.product;
    return (
      <ProductWrapper className='col-sm-9 mx-auto col-md-6 col-lg-3 my-3'>
        <div className='card'>
          <div className='img-container p-5'>
            <Link to={`/${_id}`}>
              <img src={productPic[0].img} alt='' className='card-img-top' />
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
            <p className='align-self-center mb-0'>{name}</p>
            <h5 className='font-italic mb-0'>
              <span className='mr-1'>$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
    border-radius: 10px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
  }
  .card-footer {
    font-size: 18px;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    color: #000000;
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: #00b09b; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #96c93d,
      #00b09b
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #96c93d,
      #00b09b
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border: none;
    color: white;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.4s ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: dark;
    cursor: pointer;
  }
`;
const mapStateToProps = (state) => ({
  products: state.products,
});
export default connect(mapStateToProps, { updateProduct, addToCart })(Product);
