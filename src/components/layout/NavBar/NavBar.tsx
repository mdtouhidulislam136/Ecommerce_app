import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './navbar.css';

function NavBar() {
  return (
    <Navbar bg="light" fixed='top' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">TradeTreeTop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="/product">Products</Nav.Link>
            <Nav.Link href="/shopping">ShoppingCart</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
          </Form>
          <Nav navbarScroll>
            <Nav.Link href="/signin">Sign In</Nav.Link>
            <Nav.Link href="/signup" className="singUp">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
