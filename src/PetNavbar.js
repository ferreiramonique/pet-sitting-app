import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./PetNavbar.css";
import paw from "./paw.png";

function PetNavbar() {
  return (
    <Navbar className="Navbar" bg="dark" variant="dark" sticky="top">
      <Container>
        <Container>
          <Navbar.Brand className="Nav-brand" href="/">
            CFG Group 6 - Pet sitting solution
          </Navbar.Brand>
        </Container>
        <Container>
          <Nav className="Nav">
            <Nav.Link className="Nav-link-logo" href="/">
              <img
                src={paw}
                width="30"
                className="d-inline-block align-top"
                alt="Paw logo"
              />
            </Nav.Link>
            <Nav.Link className="Nav-link" href="/about">
              About Us
            </Nav.Link>
            <Nav.Link className="Nav-link" href="/sitters">
              Find a pet sitter
            </Nav.Link>
            <Nav.Link className="Nav-link" href="/database">
              Find a house sit
            </Nav.Link>
            <Nav.Link className="Nav-link" href="/help">
              Help
            </Nav.Link>
          </Nav>
        </Container>
      </Container>
    </Navbar>
  );
}

export default PetNavbar;
