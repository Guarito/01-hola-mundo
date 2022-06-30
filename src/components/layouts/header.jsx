import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Task App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/dashboard">
                                Dashboard
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about">
                                About
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={NavLink} to="/auth/login">
                                Sign In
                            </Nav.Link>
                            <Navbar.Text>|</Navbar.Text>
                            <Nav.Link as={NavLink} to="/auth/register">
                                Sign Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
