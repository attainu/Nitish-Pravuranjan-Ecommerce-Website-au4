import React, { Component } from 'react';
import Appbar from './../navbar/Appbar.js';
import Footer from './../footer/Footer.js';
import ProductContainer from './../container/ProductContainer.js';
import {Container, Carousel} from 'react-bootstrap';

export default class Landing extends Component {
  render() {
    return (
      <div>
      <Appbar/>
      
      
      <Container  fluid="lg">
      <Carousel>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src={require('./../Images/banner1.jpg')}
      alt="First slide"
      />
      <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src={require('./../Images/banner2.jpg')}
      alt="Third slide"
      />
      
      <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src={require('./../Images/banner3.jpg')}
      alt="Third slide"
      />
      
      <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </Container>
      
      <ProductContainer />
      
      <Footer />
      
      </div>
      )
    }
  }
  