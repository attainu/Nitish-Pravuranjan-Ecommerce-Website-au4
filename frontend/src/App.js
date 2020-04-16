import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Signup from './components/signup/Signup.js';
import Login from './components/signup/Login.js';
import Landing from './components/landing/Landing.js';
import ProductContainer from './components/container/ProductContainer.js'
import './App.css';
import Loader from './components/loder/Loder.js';




class App extends Component {
  state = { loading: true };
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  wait = async (milliseconds = 1500) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    });
  };
  componentDidMount() {
    this.wait(1500);
  }
  render() {
    if (this.state.loading) return <Loader />;
    return (
      <Fragment>
        <Router>
            <Switch>
            <Route path='/' exact component={Landing}/>
            {/* <Route path='/Products' exact component={}/> */}
            <Route path='/Signup' exact component={Signup}/>
            <Route path='/Login' exact component={Login}/>
            <Route path ='/ProductContainer' exact component={ProductContainer} />
            </Switch>
            </Router>
        {/* <Appbar /> */}
        {/* <Landing /> */}
        {/* <Signup /> */}
        {/* <Login /> */}
        {/* <Container className = "card-body"/> */}
        {/* <Footer /> */}
        
      </Fragment>
    )
  }
}

export default App;

