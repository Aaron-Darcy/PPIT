//imports
import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown,Container,NavLink} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//routing import
import BMI from './BMI';
import BMR from './BMR';
import Nutrition from './Nutrition';

export default class NavBarComp extends Component {
  render() {
    return (
      //router and navbar
      <Router>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Gym Companion</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/Nutrition"}>Nutrition</Nav.Link>
                <Nav.Link as={Link} to={"/bmi"}>BMI Calculator</Nav.Link>
                <Nav.Link as={Link} to={"/BMR"}>Calorie Calculator</Nav.Link>
                <NavDropdown title="Workouts" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/cardio"}>Cardio</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/ppl"}>Push/Pull/Legs</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/fullbody"}>Full Body</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
              <Nav.Link href="http://localhost:3001/Login">Login</Nav.Link>
                <Nav.Link href="http://localhost:3001/CreateUser">Register</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        
        <div>
        <Routes>
          <Route path="/Nutrition" element={<Nutrition />}/>
          <Route path="/BMI" element={<BMI />}/>
          <Route path="/BMR" element={<BMR />}/>
        </Routes>
        </div>
      </Router>
    )
  }
}
