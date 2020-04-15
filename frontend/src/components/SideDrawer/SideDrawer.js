import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';

function SideDrawer(props) {
  let drawerClasses = 'sideDrawer';
  if (props.show) {
    drawerClasses = 'sideDrawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <Link to='/signup'>
          <li>SignUp</li>
        </Link>
        <Link to='/login'>
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default SideDrawer;
