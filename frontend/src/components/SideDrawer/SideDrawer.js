import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../Redux/actions/auth';

function SideDrawer({ show, logout, auth: { isAuthenticated } }) {
  let links;
  if (!isAuthenticated) {
    links = (
      <ul>
        <Link to='/product'>
          <li>Products</li>
        </Link>
        <Link to='/cart'>
          <li>Cart</li>
        </Link>
        <Link to='/signup'>
          <li>SignUp</li>
        </Link>
        <Link to='/login'>
          <li>Login</li>
        </Link>
      </ul>
    );
  } else {
    links = (
      <ul>
        <Link to='/product'>
          <li>Products</li>
        </Link>
        <Link to='/cart'>
          <li>Cart</li>
        </Link>
        <Link to='/' onClick={logout}>
          <li>Logout</li>
        </Link>
      </ul>
    );
  }
  let drawerClasses = 'sideDrawer';
  if (show) {
    drawerClasses = 'sideDrawer open';
  }
  return <nav className={drawerClasses}>{links}</nav>;
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(SideDrawer);
