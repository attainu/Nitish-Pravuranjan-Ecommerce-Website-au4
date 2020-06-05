import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product.js';
import './ProductList.css';
class ProductList extends Component {
  render() {
    return (
      <div className='product-list-container'>
        <h3 className='text-center'>Our Products</h3>
        <div className='product-list align-items-center'>
          {this.props.products &&
            this.props.products.map((product) => {
              return <Product key={product._id} product={product} />;
            })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products,
});
export default connect(mapStateToProps)(ProductList);
