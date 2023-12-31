import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="custom-navbar" light expand="md">
        <NavbarBrand tag={Link} to="/">Inicio</NavbarBrand> 
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/components/">Components</NavLink> 
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/comics/">Comics</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
