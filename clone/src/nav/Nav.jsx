import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const CustomNav = () => {
  const [sidePanel, setSidePanel] = useState(false);

  const handle = () => {
    setSidePanel(!sidePanel);
  };

  const fn = (event) => {
    event.stopPropagation(); // Stop event propagation
    setSidePanel(false);
  };
  
  return (
    <>
    <Navbar expand="lg" className="bg-body-territory">
      <Container>
        <Navbar.Brand href="#home"> <img src="saleLogo.svg" alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  className='text-dark me-3 hover ' href="#home">product</Nav.Link>
            <Nav.Link  className='text-dark me-3 hover  ' href="#link">Industries</Nav.Link>
            <Nav.Link  className='text-dark me-3 hover  ' href="#link">customers</Nav.Link>
            <Nav.Link  className='text-dark me-3 hover  ' href="#link">support</Nav.Link>
            <Nav.Link  className='text-dark me-3 hover  ' href="#link">learning</Nav.Link>
            
            <NavDropdown title="More" className='text-dark'  id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={fn}>SalesForce+</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Company</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link href="#link" className='border-bottom me-2'>contact us</Nav.Link>
           <SearchIcon className='ms-3 icon' />
          <LanguageIcon className='ms-3 icon'/>
          <AccountBoxIcon className='ms-3 icon'/>
          <button className='btn btn-success ms-3'>try free</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {sidePanel && (
      <div>
        my content
      </div>
    )}
    </>
  );
};

export default CustomNav;
