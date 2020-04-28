import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';
import { FaCartPlus } from 'react-icons/fa';
import { updateProduct } from '../../Redux/actions/product';
import { addToCart } from '../../Redux/actions/cart';
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
        <div>
          <div className='container-fluid p-5'>
            <Link to='/product' className='backText'>
              <IoIosArrowBack className='backIcon' />
              Back
            </Link>
          </div>

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
                  <p className='text-capitalize mb-0'>{description}</p>
                </h4>

                {/* buttons */}
                <div className='mt-4'>
                  <button
                    className='Add-cart-btn Add-card-text'
                    disabled={inCart ? true : false}
                    onClick={() => {
                      this.props.updateProduct(_id);
                      this.props.addToCart(this.state.product);
                    }}
                  >
                    <FaCartPlus className='Add-cart-icon' />
                    {inCart ? 'In Cart' : 'Add to cart'}
                  </button>
                </div>
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
export default connect(mapStateToProps, { updateProduct, addToCart })(Details);
