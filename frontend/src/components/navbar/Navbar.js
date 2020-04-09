import React, { Component } from 'react'; 
import './../Css/Navbar.css';
import Navbar from 'react-bootstrap/Navbar';

class navbar extends Component {
        render() {
                return (
                      <div>
                        <Navbar class="container-fluid" fixed="top">
                        <nav>
                              <input type="checkbox" id="nav" className="hidden" />
                              <label for="nav" class="nav-btn">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                              </label>
                              <div className="brand">
                                    <a href="#">Oliver</a>
                              </div>
                              <div className="nav-wrapper">
                                    <ul>
                                          <li><a href="#Men">Men</a></li>
                                          <li><a href="#Women">Women</a></li>
                                          <li><a href="#Electronics">Electronics</a></li>
                                          <li><a href="#Login">Login</a></li>
                                          <li><a href="#Cart">Cart</a></li>
                                    </ul>
                              </div>
                        </nav>
                  </Navbar>
                  </div>
                )
        }
}

export default navbar;
