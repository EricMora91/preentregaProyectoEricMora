import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
function NavBar (){

    return (
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#hom">Accsesorios LiOn</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#guantes">Guantes</Nav.Link>
                        <Nav.Link href="#medias">Medias</Nav.Link>
                        <Nav.Link href="#uñas">Uñas</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                        <Nav.Link href="#carrito">
                            <CartWidget/>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
    )

}

export default NavBar