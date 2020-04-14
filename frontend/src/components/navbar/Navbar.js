import React, { Component } from 'react';
import './../Css/Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

class navbar extends Component {
  render() {
    return (
      <div>
        <Navbar className='container-fluid' fixed='top'>
          <nav>
            <input type='checkbox' id='nav' className='hidden' />
            <label htmlFor='nav' className='nav-btn'>
              <i></i>
              <i></i>
              <i></i>
            </label>
            <div className='brand'>
              <Link to='/'>Oliver</Link>
            </div>
            <div className='nav-wrapper'>
              <ul>
                <Link to='/men'>
                  <li>Men</li>
                </Link>
                <Link to='/women'>
                  <li>Women</li>
                </Link>
                <Link to='/electronics'>
                  <li>Electronics</li>
                </Link>
                <Link to='/login'>
                  <li>Login</li>
                </Link>
                <Link to='/cart'>
                  <li>Cart</li>
                </Link>
              </ul>
            </div>
          </nav>
        </Navbar>
      </div>
    );
  }
}

export default navbar;
