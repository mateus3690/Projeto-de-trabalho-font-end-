import { Navbar, Container, Nav, NavDropdown, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fnc_img from '../componentes/imgs'
import img_logo from '../static/img/logo.png'
import img_user from '../static/img/user.png'

var Menu = () => (
  <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">

    <Container>

      <Navbar.Brand href="#home">

        {fnc_img(img_logo, 50, 50, 'Cadastro de Ponto')}

      </Navbar.Brand>

      <Row className=''>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>

            <Nav >

              <Nav.Link href="#p">Pontuar dia </Nav.Link>
              <Nav.Link href="#f"> Fechar Mês </Nav.Link>

              <Nav>
              
                <NavDropdown title="autenticação" className='text-center'>
                  {fnc_img(img_user, 40, 40)}
                  <NavDropdown.Item href="#ac1">Login</NavDropdown.Item>
                  <NavDropdown.Item href="#ac2">Cadastra-se</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#ac3">Sair </NavDropdown.Item>
                </NavDropdown>
      
              </Nav>

          </Nav>
        </Navbar.Collapse>
      </Row>
    </Container>
  </Navbar>

)

export default Menu;
