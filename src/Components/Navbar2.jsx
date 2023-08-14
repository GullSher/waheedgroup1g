import React, { Component, useState } from 'react';
import Logo2 from '../AssetsMain/Img/whImages/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


class Navbar2 extends Component {
    render() {
        return (
            // <h1>This Nav Bar 2</h1>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Brand>
                        <Link to="/">
                            <img className="Image1" style={{ height: '52px', paddingTop: "9px" }} src={Logo2} alt="file-not-found" id="main_logo" />
                        </Link>  </Navbar.Brand>




                    {/* <Link to="/">
                        <img className="Navbar-Image" style={{ height: '52px', paddingTop: "9px" }} src={Logo1} alt="file-not-found" id="main_logo" />
                    </Link> */}

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

        );
    }
}

export default Navbar2;



