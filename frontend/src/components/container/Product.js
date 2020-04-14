import React, { Component } from 'react';
import './../Css/Container.css';

class Product extends Component {
  render() {
    return (
      <div>
        <div className='product-card'>
          <h1>Original Shoes</h1>
          <p>Lorem ipsum dolor sit amet</p>
          <div className='product-pic'></div>
          <div className='product-info'>
            <div className='product-price'>$90</div>
            <input
              type='submit'
              className='product-button'
              value='Add to Cart'
            />
            {/* <input type="button" id="cart-button" className="hidden" /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
