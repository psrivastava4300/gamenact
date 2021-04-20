import React from 'react';
import {Nav, Navlink, Row, Col, Navbar} from 'react-bootstrap';
import Logo from './components/assets/logo.jpg';
import './Navigation.css';

const Navigation = () =>{
  return(
      <div>
          <Row >
              <Navbar className='navbar justify-content-between' bg='dark' expand='lg' variant='dark' >
                <Col lg={3} >
                  <Navbar.Brand href='#home'>
                    <div className='container'>
                      <img src={Logo} alt='logo'/>
                    </div>
                  </Navbar.Brand>
                </Col>
                <Col lg={9}>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="about">About Us</Nav.Link>   
                      <Nav.Link href="#home">Logins</Nav.Link>   
                      <Nav.Link href="#home">News</Nav.Link>   
                      <Nav.Link href="#home">Contact</Nav.Link>   
                    </Nav>   
                  </Navbar.Collapse>
                  </Col>
                </Navbar>
          </Row>
      </div>
  );
};

export default Navigation;