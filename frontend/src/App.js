import React, { Fragment } from 'react';
import Signup from './components/signup/Signup';
import Login from './components/signup/Login';
import Navbar from './components/navbar/Navbar.js';
import Container from './components/container/Product.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/products' component={Container} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
