import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product.js';

class ProductList extends Component {
  render() {
    return (
      <div className='container p-5'>
        <h3 className='text-center'>Our Products</h3>
        <div className='row'>
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
