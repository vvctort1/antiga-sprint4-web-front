import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../public/img/logo.png";


export default function Cabecalho() {
  return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          {/* <Navbar.Brand href="/">  </Navbar.Brand> <img className="" src={Logo} alt="Logo EcoUrban" /> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Seções" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/smartcities"> Smartcities</NavDropdown.Item>
                <NavDropdown.Item href="/pontosNegativos"> Pontos Negativos  </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="/ideia"> Ideia </NavDropdown.Item>
                <NavDropdown.Item href="/coletivos"> Deveres Coletivos </NavDropdown.Item>
                <NavDropdown.Item href="/individuais"> Deveres Individuais </NavDropdown.Item>
                <NavDropdown.Item href="/problema"> Problema </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
