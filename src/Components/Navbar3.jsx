import React, { Component, useState } from 'react';
import Logo2 from '../AssetsMain/Img/whImages/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


export default function Navbar3() {
    const [refreshKey, setRefreshKey] = useState(0);
    const handleRefresh = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    };
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}


                <Navbar.Brand>
                    <Link to="/">
                        <img className="Image1" style={{ height: '52px', paddingTop: "9px" }} src={Logo2} alt="file-not-found" id="main_logo" />
                    </Link>
                </Navbar.Brand>



                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#AboutUs">AboutUs</Nav.Link>


                        <NavDropdown title="OurConcerns" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>

                            {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
 */}
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >


    )
}


