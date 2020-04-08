import React, { Component, Fragment } from 'react';
import Signup from './components/signup/Signup';
import Login from './components/signup/Login';
import Navbar from './components/navbar/Navbar.js';
import Container from './components/container/Container.js';

import './App.css';



class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Signup />
        {/* <Login /> */}
        {/* <Container /> */}
      </Fragment>
    )
  }
}

export default App;

