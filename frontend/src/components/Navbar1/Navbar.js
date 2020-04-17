import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../Redux/actions/auth';
import './Navbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Navbar = ({ onClick, logout, auth: { isAuthenticated } }) => {
  let links;
  if (!isAuthenticated) {
    links = (
      <ul>
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
        <Link to='/cart'>
          <li>Cart</li>
        </Link>
        <Link onClick={logout} to='/'>
          <li>Logout</li>
        </Link>
      </ul>
    );
  }

  return (
    <header className='tool-bar'>
      <nav className='nav-bar'>
        <div className='drawerToggle'>
          <DrawerToggleButton click={onClick} />
        </div>
        <div className='nav-bar-logo'>
          <Link to='/'>LOGO</Link>
        </div>
        <div className='spacing'></div>
        <div className='nav-bar-items'>{links}</div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
