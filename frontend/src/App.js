import React, { Fragment, Component } from 'react';
import Signup from './components/Signup/Signup.js';
import Login from './components/Signup/Login.js';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Alert from './components/Alert/Alert';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { setAuthToken } from './utils/setAuthToken';
import { loadUser } from './Redux/actions/auth';
import { getProducts } from './Redux/actions/product';
import store from './Redux/store.js';
import Loader from './components/Loader/Loader.js';
import ProductList from './components/container/ProductList.js';
import Details from './components/container/Details.js';
import Orders from './components/Orders/OrderHistory';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
class App extends Component {
  state = {
    sideDrawerOpen: false,
    loading: true,
  };
  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 1500) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false,
    });
  };

  componentDidMount = () => {
    store.dispatch(loadUser());
    store.dispatch(getProducts());
    this.wait(1500);
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
              <Route exact path='/' component={ProductList} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
              <Route path='/cart' component={Cart} />
              <Route path='/orders' component={Orders} />
              <Route path='/:productId' component={Details} />
            </Switch>
          </main>
        </Router>
      </Fragment>
    );
  }
}

export default App;
