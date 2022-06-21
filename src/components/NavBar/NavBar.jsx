import * as userService from '../../utilities/users-service';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas'
import './NavBar.css';

export default function NavBar(props) {

    function handleLogOut() {
        userService.logOut();
        props.setUser(null);
    }

    return (
        <>
            <Navbar expand="lg" variant="dark" className="mb-3 NavBar" sticky="top">
                <Container fluid>
                    <Navbar.Brand className="NavbarBrandText">Vintage Vintner</Navbar.Brand>
                    <Navbar.Text>Welcome {props.user.name}</Navbar.Text>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-lg"
                        aria-labelledby="offcanvasNavbar-expand-lg"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbar-expand-lg" className="drawer-title">
                                Vintage Vintner
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/orders">Order History</Nav.Link>
                                <Nav.Link href="/orders/new">New Order</Nav.Link>
                                <Nav.Link href="/cart">Cart</Nav.Link>
                                <Nav.Link href="" onClick={handleLogOut}>Logout</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}