import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Navbar = (props) => {
  return (
    <header className='tool-bar'>
      <nav className='nav-bar'>
        <div className='drawerToggle'>
          <DrawerToggleButton click={props.onClick} />
        </div>
        <div className='nav-bar-logo'>
          <Link to='/'>LOGO</Link>
        </div>
        <div className='spacing'></div>
        <div className='nav-bar-items'>
          <ul>
            <Link to='/signup'>
              <li>SignUp</li>
            </Link>
            <Link to='/login'>
              <li>Login</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
