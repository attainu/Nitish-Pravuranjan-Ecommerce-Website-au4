import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default class Footer extends Component {
	render() {
		return (
			<div>
			<Container  fluid>
  				<Row className="fixed-buttom mx-1 m-3 p-5 rounded bg-light shadow-sm">
    			<Col>About Us</Col>
			    <Col>Contact Us</Col>
			    <Col>New Items</Col>
			    <Col>@Copyright Oliver.com</Col>
  			</Row>
			 
			</Container>
			</div>
		)
	}
}
