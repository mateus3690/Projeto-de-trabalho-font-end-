import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/style.css'
//import { BrowserRouter as Router ,Routes, Route , Switch, Link} from "react-router-dom";

var fnc_banner = () => {
    return(

        <section id="hero" class="d-flex align-items-center mt-3 border-radius">
                <div class="container" data-aos="zoom-out" data-aos-delay="100">
                <h1>Bem vindo ao <span className='text-danger'>Sistema de Cadastro de Ponto</span></h1>
                <h2 class="text-white">Nunca foi tão fácil cadastrar seu ponto e analisar seu fechamento</h2>
                <div class="d-flex">
                    <a href="#about" className="btn-danger btn-lg text-center">Começa</a>
                </div>
                </div>
        </section>

    )
}

export default fnc_banner;
