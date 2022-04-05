import { Navbar, Container, Nav, NavDropdown, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fnc_img from '../componentes/imgs'
import img_logo from '../static/img/logo.png'
import img_user from '../static/img/user.png'
import sair from '../utils/sair'
import road from '../utils/carregarPage'
import {Link} from "react-router-dom";

var Menu = (props) => {
  var nome = props.nome
  //var usuario = nome.split(' ') ? nome : ''
  //nome = `${usuario[0]} ${usuario[1]}`
  return(
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">

      <Container>

        <Navbar.Brand>

        <Link style={{"text-decoration": 'none'}} to="/">{fnc_img(img_logo, 50, 50, 'Cadastro de Ponto')}</Link>

        </Navbar.Brand>

        <Row className=''>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>

              <Nav >
              <Nav.Link>
                  <Link style={{"text-decoration": 'none', "color":"lime"}}
                        to={'/'}>
                        <p className='h6 '><strong>Usuario: </strong>{nome ? nome : "Visitante"}</p>
                  </Link> 
                </Nav.Link>
                
                <Nav.Link>
                  { nome &&

                    <Link style={{"text-decoration": 'none', "color":"white"}}
                          to={'/cadastroPonto'}>
                          Pontuar dia
                    </Link> 

                  }
                </Nav.Link>

                <Nav.Link>
                  { nome &&

                    <Link style={{"text-decoration": 'none', "color":"white"}}
                          to={'/fecharMes'}>
                          Fechar Mês
                    </Link> 

                  }
                </Nav.Link>

                <Nav>
                
                  <NavDropdown title="Autenticação" className='text-center'>

                    {fnc_img(img_user, 40, 40)}
                    <NavDropdown.Item>
                      { nome === null &&
                        <Link style={{"text-decoration": 'none', "color":"black"}}
                              to="/login">
                              <div>
                                Login
                              </div>
                        </Link> 
                      }
                    </NavDropdown.Item>

                      <NavDropdown.Item>
                       { nome === null &&
                          <Link style={{"text-decoration": 'none', "color":"black"}}
                                to="/cadastra-se">
                                <div> 
                                  Cadastra-se
                                </div>   
                          </Link>
                        }
                      </NavDropdown.Item>
                    
                    
                    <NavDropdown.Divider />
                    
                    <NavDropdown.Item>
                      { nome &&
                        <Link style={{"text-decoration": 'none', "color":"black"}}
                              to="/">

                              <p onClick={() =>{
                                sair(true)
                                road(true)
                              }}>Sair</p>
                        </Link>
                      }
                    </NavDropdown.Item>

                  </NavDropdown>
        
                </Nav>

            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  )

}

export default Menu;
