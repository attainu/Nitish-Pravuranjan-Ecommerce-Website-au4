import React, { Component } from 'react';
import Appbar from './../navbar/Appbar.js';
import Footer from './../footer/Footer.js';
import { Container, Row} from 'react-bootstrap';

class ProductContainer extends Component {
        render() {
                return (
                        <div>   
                        <Container>
                        <Row className= "mx-auto justify-content-center pt-5 pb-5 my-2  ">
                        <div className="  col-12 col-sm-8 col-md-6 col-lg-4">
                        <div className="card signup-card">
                        <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png" alt="Vans" />
                        <div className="card-img-overlay d-flex justify-content-end">
                        <a href="#" className="card-link text-danger like">
                        <i className="fas fa-heart"></i>
                        </a>
                        </div>
                        <div className="card-body">
                        <h4 className="card-title">Vans Sk8-Hi MTE Shoes</h4>
                        <h6 className="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>
                        <p className="card-text">
                        The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the elements whilst still looking cool.             </p>
                        <div className="options d-flex flex-fill">
                        <select className="custom-select ml-1">
                        <option selected>Size</option>
                        <option value="1">41</option>
                        <option value="2">42</option>
                        <option value="3">43</option>
                        </select>
                        </div>
                        <div className="buy d-flex justify-content-between align-items-center ">
                        <div className="price text-success"><h5 className="mt-4">$125</h5></div>
                        <a href="#" className="product-button text-center mt-4">Add to Cart</a>
                        </div>
                        </div>
                        </div>
                        </div>
                        </Row>
                        </Container>
                        
                        </div>
                        )
                }
        }

export default ProductContainer;