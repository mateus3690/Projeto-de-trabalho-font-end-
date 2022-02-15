import {Link} from "react-router-dom";
import img_face from '../static/img/icon/icons8-facebook-100.png'
import img_twit from '../static/img/icon/icons8-twitter-100.png'
import img_linke from '../static/img/icon/icons8-linkedin-100.png'
import img_inst from '../static/img/icon/icons8-instagram-100.png'
import img_logo from '../static/img/logo.png'
import fnc_img from './imgs'

function footer(props) {
    return (
        <footer className='bg-danger text-white mt-5'>
            <div className='footer-top'> 
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-4 col-md-6 footer-contact'>
                            <h4 className='mt-0'>CP.</h4>
                            <p>
                                Casdatro de Ponto de Trabalho
                                Brazil, Maceió<br></br>
                                CEP: 55066-000<br></br>
                                <strong>Telefone:</strong> +55 (82) 99364-2534<br></br>
                                <strong>Email:</strong> mateusmag3690@gmail.com
                            </p>
                        </div>
                        

                        <div className='col-lg-3 col-md-6 footer-links'>
                            <h4>Menu</h4>   
                            <Link id='no_line' to="/">Inicio</Link><br></br>
                            { props.nome &&
                                <Link id='no_line' to="/cadastroPonto">Pontuar dia</Link>
                            }<br></br>
                            { props.nome &&
                                <Link id='no_line' to="/">Fechar Mês</Link>
                            }
                              
                        </div>

                        <div class="col-lg-4 text-center col-md-6 footer-links">
                            <h4>Redes Socias</h4>
                            <p>Nossas Redes Socias, nos sigam para ver todas nossas novidades!</p>
                            <div class="d-none d-md-flex">
                                <a target="_blank" href="https://pt-br.facebook.com/" rel="noreferrer">{fnc_img(img_face,  40, 40)}</a>
                                <a target="_blank" href="https://www.linkedin.com/in/mateus-santos-0b7525211">{fnc_img(img_linke, 40, 40)}</a>
                                <a target="_blank" href="https://twitter.com/">{fnc_img(img_twit,  40, 40)}</a>
                                <a target="_blank" href="https://www.instagram.com/">{fnc_img(img_inst,  40, 40)}</a>
                                <Link to="/">{fnc_img(img_logo,  40, 40)}</Link>
                            </div>
                         </div>

                    </div>
                </div>
            </div>
            <hr></hr>
            <div class="container py-1 text-center">
				<div>
					&copy; Copyright <strong><span>CP - Cadastro de Ponto</span></strong>. Todos os direitos reservados.
                    <p>Developed by <a id='no_line' href="#">Mateus Santos</a></p>
                </div>
            </div>

        </footer>
        
    )
}

export default footer;