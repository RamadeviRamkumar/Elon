// Remove the Router import and component from AppBar.js
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './AppBar.css';
import About from './About';
import Services from './Services';
import TechStacks from './TechStacks';
import ContactUs from './ContactUs';
import Home from './Home';
import Login from './Login';
import { Link, Routes, Route } from "react-router-dom";

const AppBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="">
          <Navbar.Brand href="#home">Elon Native System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
              <Nav.Link as={Link} to={"/Services"}>Services</Nav.Link>
              <Nav.Link as={Link} to={"/TechStacks"}>TechStacks</Nav.Link>
              <Nav.Link as={Link} to={"/ContactUs"}>ContactUs</Nav.Link>
              <Nav.Link as={Link} to={"/Login"}>
                <button className='btn p-2 my-lg-0 my-2'></button>Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/TechStacks" element={<TechStacks />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppBar;
