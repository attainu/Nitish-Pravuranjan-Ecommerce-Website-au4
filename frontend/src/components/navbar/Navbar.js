import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../Redux/actions/auth';
import './Navbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const Navbar = ({ onClick, logout, auth: { isAuthenticated, user } }) => {
  let links;
  if (!isAuthenticated) {
    links = (
      <div className='nav-links'>
        <ul>
          <Link to='/cart'>
            <li>Cart</li>
          </Link>
          <Link to='/orders'>
            <li>Orders</li>
          </Link>
        </ul>
        <div className='dropdown'>
          <DropdownButton
            variant='inherit'
            id='dropdown-basic-button'
            title='Welcome!'
          >
            <Dropdown.Item href='/signup'>Signup</Dropdown.Item>
            <Dropdown.Item href='/login'>Login</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    );
  } else {
    links = (
      <div className='nav-links'>
        <ul>
          <Link to='/cart'>
            <li>Cart</li>
          </Link>
          <Link to='/orders'>
            <li>Orders</li>
          </Link>
        </ul>
        <div className='dropdown'>
          <DropdownButton
            variant='inherit'
            id='dropdown-basic-button'
            title={user ? user.name : 'Welcome!'}
          >
            <Dropdown.Item onClick={logout} href='/'>
              Logout
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    );
  }

  return (
    <header className='tool-bar'>
      <nav className='nav-bar'>
        <div className='drawerToggle'>
          <DrawerToggleButton click={onClick} />
        </div>
        <div className='nav-bar-logo'>
          <Link to='/'>E-Store</Link>
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
