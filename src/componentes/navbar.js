import { Navbar, Container, Nav, NavDropdown, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fnc_img from '../componentes/imgs'
import img_logo from '../static/img/logo.png'
import img_user from '../static/img/user.png'
import Login from '../pages/cadastroUser'
import {Link} from "react-router-dom";

var Menu = () => (
  
  <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">

    <Container>

      <Navbar.Brand href="#home">

      <Link style={{"text-decoration": 'none'}} to="/">{fnc_img(img_logo, 50, 50, 'Cadastro de Ponto')}</Link>

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
                  <NavDropdown.Item>
                    <Link style={{"text-decoration": 'none', "color":"black"}}
                          to="/login">
                          Login
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link style={{"text-decoration": 'none', "color":"black"}}
                          to="/cadastro-se">
                          Cadastra-se
                    </Link>
                  </NavDropdown.Item>
                  
                  <NavDropdown.Divider />
                  
                  <NavDropdown.Item>
                    <Link style={{"text-decoration": 'none', "color":"black"}}
                          to="/sair">
                          Sair
                    </Link>
                  </NavDropdown.Item>

                </NavDropdown>
      
              </Nav>

          </Nav>
        </Navbar.Collapse>
      </Row>
    </Container>
  </Navbar>

)

export default Menu;
