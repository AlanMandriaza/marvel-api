import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function MyNavbar() {
  return (
    <div style={{ marginBottom: '60px' }}>
      <Navbar style={navbarStyle} light expand="md">
        <NavbarBrand href="/" style={linkStyle}>Inicio</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/" style={linkStyle}>Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" style={linkStyle}>GitHub</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

// Estilos para el navbar y los links
const navbarStyle = {
  backgroundColor: '#2f2f2f',
  color: '#b3b3b3',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1000,
  borderBottom: '2px solid #b3b3b3',  
  boxShadow: '0px 0px 10px 0px rgba(179,179,179,0.3)', 
  backgroundColor: 'rgba(47, 47, 47, 0.9)'

}

const linkStyle = {
  color: '#b3b3b3',
  margin: '0 10px',  
  transition: 'color 0.3s', 
  '&:hover': {
    color: '#ffffff',  
    textDecoration: 'none'  
  }
}

export default MyNavbar;
