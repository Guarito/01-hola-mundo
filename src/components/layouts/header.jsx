import { NavLink, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthContext";
import { types } from "../../context/types";

const Header = () => {
    const navigate = useNavigate();
    const { user, dispatch } = useContext(AuthContext);

    const { email, isLogged } = user;
    const handleLogout = () => {
        dispatch({ type: types.logout });
        localStorage.removeItem("credentials");
        navigate("/auth/login");
    };
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
                            {isLogged ? (
                                <>
                                    <Navbar.Text>Welcome, {email}</Navbar.Text>{" "}
                                    <Button
                                        variant="dark"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={NavLink} to="/auth/login">
                                        Sign In
                                    </Nav.Link>

                                    <Nav.Link as={NavLink} to="/auth/register">
                                        Sign Up
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
