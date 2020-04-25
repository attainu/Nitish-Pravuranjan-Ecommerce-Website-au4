import React, { Fragment, Component } from 'react';
import Signup from './components/Signup1/Signup.js';
import Login from './components/Signup1/Login.js';
import Navbar from './components/Navbar1/Navbar';
import Container from './components/container/Product.js';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Alert from './components/Alert/Alert';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { setAuthToken } from './utils/setAuthToken';
import { loadUser } from './Redux/actions/auth';
import store from './Redux/store.js';
import Loader from './components/Loader/Loader.js';
import Landing from './components/container/Landing.js';
import Product from './components/container/Product.js';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
class App extends Component {
  state = {
    sideDrawerOpen: false,
    loading: true,
  };
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 1500) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    });
  };

  componentDidMount = () => {
    this.wait(1500);
    store.dispatch(loadUser());
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
    if (this.state.loading) return <Loader />;
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
          <main style={{ height: '90%', marginTop: '10vh' }}>
            <Alert />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
              <Route path='/cart' component={Cart} />
            </Switch>
          </main>
        </Router>
      </Fragment>
    );
  }
}

export default App;
