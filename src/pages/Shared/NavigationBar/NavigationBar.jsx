import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';


const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container>
            {/* nav bar start */}
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="light"
                variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">
                                <Link
                                    to="/"
                                    className='text-decoration-none text-secondary'>
                                    Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link>About</Nav.Link>
                            <Nav.Link>Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user
                                &&
                                <Nav.Link>
                                    <FaUserCircle
                                        style={{ fontSize: '2rem' }} />
                                    {/* {user.displayName} */}
                                </Nav.Link>
                            }
                            <Nav.Link eventKey={2}>
                                {
                                    user ?
                                        <Button
                                            variant="secondary">
                                            Logout
                                        </Button>
                                        :
                                        <Link
                                            to="/login">
                                            <Button
                                                variant="secondary">
                                                Login
                                            </Button>
                                        </Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* nav bar end */}
        </Container>
    );
};

export default NavigationBar;