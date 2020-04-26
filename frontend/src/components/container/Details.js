import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Details extends Component {
  state = {
    product: null,
  };
  componentDidMount() {
    let productId = this.props.match.params.productId;
    this.props.products.forEach((item) => {
      if (item._id === productId) this.setState({ product: item });
    });
  }
  render() {
    if (!this.state.product) {
      return <h1>Loading...</h1>;
    } else {
      let {
        _id,
        name,
        productPic,
        description,
        price,
        inCart,
      } = this.state.product;
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 my-3'>
              <img src={productPic[0].img} className='img-fluid' alt='' />
            </div>
            {/* prdoduct info */}
            <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
              <h1>{name}</h1>
              <h4>
                <strong>
                  price : <span>$</span>
                  {price}
                </strong>
              </h4>
              <h4>
                <strong>Description:</strong>
                <p className='text-capitalize font-weight-bold mb-0'>
                  {description}
                </p>
              </h4>

              {/* buttons */}
              <div className='mt-4'>
                <Link to='/product'>
                  <button className='btn btn-outline-dark mr-2'>
                    Back to products
                  </button>
                </Link>

                <button
                  disabled={inCart ? true : false}
                  onClick={() => {
                    console.log('clicked');
                  }}
                >
                  {inCart ? 'in cart' : 'add to cart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  products: state.products,
});
export default connect(mapStateToProps)(Details);
