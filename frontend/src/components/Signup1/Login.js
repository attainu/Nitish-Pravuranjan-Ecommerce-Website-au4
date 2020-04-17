import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../Css/Signup.css';
import { login } from '../../Redux/actions/auth';

function Login({ login, isAuthenticated }) {
  const [formData, setformData] = useState({
    email: '',
    password: '',
  });
  let { email, password } = formData;
  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  if (isAuthenticated) {
    return <Redirect to='/cart' />;
  }
  return (
    <div className='container'>
      <h2 className='text-center'>Login</h2>
      <div className='row text-center'>
        <form onSubmit={(e) => onSubmit(e)} className='mt-2 mx-auto my-auto'>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              required
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
              required
              onChange={(e) => onChange(e)}
            />
          </div>
          <input
            type='submit'
            className='signin-button form-control'
            value=' Login '
          />
          <div className='form-group links'>
            <Link to='#'>Forgot Password</Link> or{' '}
            <Link to='/signup'>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
