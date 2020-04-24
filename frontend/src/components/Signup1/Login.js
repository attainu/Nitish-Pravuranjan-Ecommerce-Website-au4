import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {Card, Form, Container, Row, Button } from 'react-bootstrap';
//import '../Css/Signup.css';
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
    // <div className='container'>
    //   <h2 className='text-center'>Login</h2>
    //   <div className='row text-center'>
    //     <form onSubmit={(e) => onSubmit(e)} className='mt-2 mx-auto my-auto'>
    //       <div className='form-group'>
    //         <input
    //           type='email'
    //           className='form-control'
    //           placeholder='Email'
    //           required
    //           name='email'
    //           onChange={(e) => onChange(e)}
    //         />
    //       </div>

    //       <div className='form-group'>
    //         <input
    //           type='password'
    //           className='form-control'
              // placeholder='Password'
              // name='password'
              // required
              // onChange={(e) => onChange(e)}
    //         />
    //       </div>
    //       <input
    //         type='submit'
    //         className='signin-button form-control'
    //         value=' Login '
    //       />
    //       <div className='form-group links'>
    //         <Link to='#'>Forgot Password</Link> or{' '}
    //         <Link to='/signup'>Register</Link>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <Container fluid>
    <Row className= "mx-auto justify-content-center p-5 " xs>
    <Card className = "signup-card ">
    <Card.Body>
    <Card.Title className="py-3 text-center font-weight-bold">Login</Card.Title>
    <Form onSubmit={(e) => onSubmit(e)}>

    <Form.Group controlId="formBasicEmail">
    <Form.Label className = "font-weight-bold">Email address</Form.Label>
    <Form.Control type="username" className="inputfield-signup" placeholder='Email'
              required
              name='email'
              onChange={(e) => onChange(e)} />
    <Form.Text className="text-muted">
    We do not share your email with anyone.
    </Form.Text>
    </Form.Group>


    <Form.Group controlId="formBasicPassword">
    <Form.Label  className = "font-weight-bold">Password</Form.Label>
    <Form.Control type="password" className="inputfield-signup"    placeholder='Password'
              name='password'
              required
              onChange={(e) => onChange(e)}/>
    </Form.Group>

    <Button  className = "account-btn" variant="primary" type="submit">
    Submit
    </Button>
    
    </Form>

    </Card.Body>
    </Card>
    </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
