import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        // ----- Navigation ----- //
        <div className="main-nav-bar">
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        {/* ----- Right Site TM Logo ----- */}
                        <Nav
                            className="me-auto my-2 my-lg-0 nav-bar-logo"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Navbar.Brand href="#"><img src="https://i.ibb.co/kBLy8T6/Logo-4.png" alt="" /></Navbar.Brand>
                        </Nav>


                        {/* ----- Nav bar ----- */}
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title="Doctor" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action1">Doctor-1</NavDropdown.Item>
                                <NavDropdown.Item href="#action2">Doctor-2</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Doctor-3</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Services" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action4">Services-1</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Services-2</NavDropdown.Item>
                                <NavDropdown.Item href="#action6">Services-3</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Pharmacy Owner" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action7">Pharmacy Owner-1</NavDropdown.Item>
                                <NavDropdown.Item href="#action8">Pharmacy Owner-2</NavDropdown.Item>
                                <NavDropdown.Item href="#action9">Pharmacy Owner-3</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='nav-link-color' href="#action10">About Us</Nav.Link>
                            <Nav.Link href="#action11">Blog</Nav.Link>
                            <Nav.Link href="#action12">Contact</Nav.Link>
                            <Nav.Link href="#action13">FAQ</Nav.Link>
                        </Nav>
                        {/* ----- Right Site Language Login & ----- */}
                        <Nav
                            className="ml-auto my-2 my-lg-0 right-nav-bar"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title="En" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action14">En-1</NavDropdown.Item>
                                <NavDropdown.Item href="#action15">En-2</NavDropdown.Item>
                                <NavDropdown.Item href="#action16">En-3</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action17">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;