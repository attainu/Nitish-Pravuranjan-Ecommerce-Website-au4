import React from 'react';
import './DrawerToggleButton.css';

function DrawerToggleButton(props) {
  return (
    <button className='toggle-button' onClick={props.click}>
      <div className='toggle-button-line'></div>
      <div className='toggle-button-line'></div>
      <div className='toggle-button-line'></div>
    </button>
  );
}

export default DrawerToggleButton;
