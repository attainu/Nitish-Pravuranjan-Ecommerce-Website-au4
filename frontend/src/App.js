import React, { Fragment, Component } from 'react';
import Signup from './components/Signup1/Signup.js';
import Login from './components/signup/Login';
import Navbar from './components/Navbar1/Navbar';
import Container from './components/container/Product.js';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop = null;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop onClick={this.backdropClickHandler} />;
    }
    return (
      <Fragment>
        <Router>
          <Navbar onClick={this.drawerToggleHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Switch>
            <Route exact path='/' component={Container} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
