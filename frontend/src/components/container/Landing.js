import React, { Component } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import ProductList from './ProductList.js';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Container fluid='lg'>
          <Carousel className='pt-2'>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={require('./../Images/banner1.jpg')}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={require('./../Images/banner2.jpg')}
                alt='Third slide'
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={require('./../Images/banner3.jpg')}
                alt='Third slide'
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
        <ProductList />
      </div>
    );
  }
}
