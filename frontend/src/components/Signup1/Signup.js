import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {Card, Form, Container, Row, Button } from 'react-bootstrap';
import { setAlert } from '../../Redux/actions/alert';
import { register } from '../../Redux/actions/auth';
//import './Signup.css';

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
    <Container fluid>
      <Row className= "mx-auto justify-content-center p-5 " xs>
      <Card className = "signup-card ">
			<Card.Body>
			<Card.Title className="py-3 text-center font-weight-bold">SignUp</Card.Title>
      <Form onSubmit={(e) => onSubmit(e)}>

      <Form.Group controlId="formBasicEmail">
			<Form.Label className = "font-weight-bold">Username</Form.Label>
			<Form.Control type="username" className="inputfield-signup"  placeholder='Username'
              name='name'
              onChange={(e) => onChange(e)} />
			</Form.Group>

      <Form.Group controlId="formBasicEmail">
			<Form.Label className = "font-weight-bold">Email address</Form.Label>
			<Form.Control type="email" className="inputfield-signup"  placeholder='Email'
              name='email'
              onChange={(e) => onChange(e)}/>
			<Form.Text className="text-muted">
			We do not share your email with anyone.
			</Form.Text>
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
			<Form.Label  className = "font-weight-bold">Password</Form.Label>
			<Form.Control type="password" className="inputfield-signup"   placeholder='Password'
              name='password'
              onChange={(e) => onChange(e)} />
			</Form.Group>

      <Form.Group controlId="formBasicPassword">
			<Form.Label  className = "font-weight-bold">Password</Form.Label>
			<Form.Control type="password" className="inputfield-signup"   placeholder='Re-enter password'
              name='password2'
              onChange={(e) => onChange(e)} />
			</Form.Group>

      <Button  className = "account-btn" variant="primary" type="submit">
			Submit
			</Button>
      
      </Form>

      </Card.Body>
      </Card>
        {/* <form onSubmit={(e) => onSubmit(e)} className='mt-2 mx-auto my-auto'>
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
        </form> */}
    </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Signup);
