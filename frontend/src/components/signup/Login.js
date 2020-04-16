import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Card, Form, Container, Row, Button } from 'react-bootstrap';
import Appbar from '../navbar/Appbar';
import Footer from '../footer/Footer';
export default class Login extends Component {
	render() {
		return (
			<div>
			<Appbar/>
			
			<Container fluid>
			<Row className= "mx-auto justify-content-center p-5 " xs>
			
			
			<Card className = "signup-card ">
			<Card.Body>
			<Card.Title className="py-3 text-center font-weight-bold">Login</Card.Title>
			<Form >
			<Form.Group controlId="formBasicEmail">
			<Form.Label className = "font-weight-bold">Email address</Form.Label>
			<Form.Control type="email" className="inputfield-signup" placeholder="Enter email" />
			<Form.Text className="text-muted">
			We do not share your email with anyone.
			</Form.Text>
			</Form.Group>
			
			<Form.Group controlId="formBasicPassword">
			<Form.Label  className = "font-weight-bold">Password</Form.Label>
			<Form.Control type="password" className="inputfield-signup"  placeholder="Password" />
			</Form.Group>
			<Button  className = "account-btn" variant="primary" type="submit">
			Submit
			</Button>
			</Form>
			<Card.Text className="pt-5 text-center "><Link className="account-route-text" to='/Signup'>New to Oliver? Create an account</Link></Card.Text>
			</Card.Body>
			</Card>
			
			</Row>
			
			</Container>
			
			<Footer />
			
			</div>
			)
		}
	}
	