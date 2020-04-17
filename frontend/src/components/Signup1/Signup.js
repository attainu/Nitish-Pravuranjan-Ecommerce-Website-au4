import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../Redux/actions/alert';
import { register } from '../../Redux/actions/auth';
import './Signup.css';

function Signup({ setAlert, register, isAuthenticated }) {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;
  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/cart' />;
  }
  return (
    <div className='container'>
      <h2 className='text-center'>Register Form</h2>
      <div className='row text-center'>
        <form onSubmit={(e) => onSubmit(e)} className='mt-2 mx-auto my-auto'>
          <div className='form-group'>
            <input
              type='username'
              className='form-control'
              placeholder='Username'
              name='name'
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              name='email'
              onChange={(e) => onChange(e)}
            />
          </div>

          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              placeholder='Password'
              name='password'
              onChange={(e) => onChange(e)}
            />
          </div>

          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              placeholder='Re-enter password'
              name='password2'
              onChange={(e) => onChange(e)}
            />
          </div>
          <input type='submit' className='signin-button ' value='Sign Up' />
          <div className='form-group links'>
            <Link to='#'>Forgot Password</Link> or{' '}
            <Link to='/login'>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Signup);
