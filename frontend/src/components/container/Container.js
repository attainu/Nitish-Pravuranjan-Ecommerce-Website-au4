import React, { Component } from 'react';
import './../Css/Container.css';

class Container extends Component {
        render() {
                return (
                        <div>
                                <div className="product-card">
      <h1>Original Shoes</h1>
      <p>Lorem ipsum dolor sit amet</p>
      <div className="product-pic"></div>
      <div className="product-colors">
        <span className="blue active" data-color="#7ed6df" data-pic="url(1.png)"></span>
      </div>
      <div className="product-info">
        <div className="product-price">$90</div>
        <a href="#" className="product-button">Add to Cart</a>
      </div>
    </div>
                        </div>
                )
        }
}

export default Container;
