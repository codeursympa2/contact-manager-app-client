import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavScroll() {
  return (
    <Navbar bg="danger" data-bs-theme="dark" sticky="top" className='text-white' expand="lg" >
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>Contact Manager App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll 
          >
            <Nav.Link as={Link} to='/' end>Accueil</Nav.Link>
            <Nav.Link as={Link} to='/add' >Créer</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;