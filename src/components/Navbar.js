import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navi = (props) => {
  return (
    <div>
      <Navbar style={{backgroundColor: '#2f2f2f', color: '#b3b3b3', position: 'fixed', width: '100%', zIndex: 1000}} light expand="md">
        <NavbarBrand href="/" style={{color: '#b3b3b3'}}>Inicio</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/" style={{color: '#b3b3b3'}}>null</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" style={{color: '#b3b3b3'}}>GitHub</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Navi;
