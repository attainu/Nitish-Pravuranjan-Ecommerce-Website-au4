import React, { Component } from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
// import './../Css/Navbar.css';

class Appbar extends Component {
        render() {
                return (
                        <div>
                        
                        <Container  className=" my-2 " fluid>
                        <Navbar  bg="light " className="shadow-sm" expand="lg">
                        <Navbar.Brand className = "navbar-brand"><Link className = "navbar-text" to='/'>Oliver</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className = "navbar-items"  id="basic-navbar-nav">
                        
                        <Nav className= "mx-auto justify-content-center ">
                        <Link className= "navbar-text" to='/ProductContainer'>Sneakers</Link>
                        </Nav>
                        <Nav className="justify-content-end">
                        <Link className = "navbar-text " to='/Signup'>Account &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                        <Link className = "navbar-text" to='/Cart'><FiShoppingCart className="navbar-icon"/></Link>
                        </Nav>
                        
                        </Navbar.Collapse>
                        </Navbar>
                        </Container>
                        
                        </div>
                        )
                }
        }

export default Appbar;