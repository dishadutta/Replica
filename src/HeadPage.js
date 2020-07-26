import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, Navbar, Nav, FormControl, Form } from 'react-bootstrap';

class HeadPage extends Component {
  render () {
    return (
        <>
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home" style={{color:"#F07418", fontWeight:"bold"}}>MIJUAPP</Navbar.Brand>
      <Nav className="mr-auto">
      </Nav>
      <Form inline>
      <Nav className="mr-auto">
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#features">FEATURES</Nav.Link>
        <Nav.Link href="#oerview">OVERVIEW</Nav.Link>
        <Nav.Link href="#screens">SCREENS</Nav.Link>
        <Nav.Link href="#contact">CONTACT</Nav.Link>
      </Nav>
      <Button variant="outline-light" className="mr-sm-2 head-button">GET STARTED</Button>
      </Form>
    </Navbar>

    </>
  );
  }
}

export default HeadPage;
