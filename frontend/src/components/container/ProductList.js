import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../Redux/actions/product';
import Product from './Product.js';

class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Our Products</h1>
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
export default connect(mapStateToProps, { getProducts })(ProductList);
