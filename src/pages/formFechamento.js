import {Component} from 'react';
import {toast} from 'react-toastify/';
import 'react-toastify/dist/ReactToastify.css';
import gera_pdf from '../utils/geradorPDF'

import {Link} from "react-router-dom";
toast.configure()

//import geraPDF from '../utils/geradorPDF';

export default class editarPonto extends Component{
 
  state={
    data_mes: sessionStorage.getItem("dataMes"),
    dados:[]
  }
  
  responseGet = () => {
      
    const url = `http://127.0.0.1:5000/v1/fechamento/${this.props.chave}/${this.state.data_mes}/`
    const config = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    fetch(url, config)
        .then(response => response.json())
        .then(data => {
          this.setState({dados:data})                 
        }
      )
  }

  componentDidMount() {
    this.responseGet()
  }

  loginForm = () =>{
    return(
      <div className='container col-7 mt-3'>
        <h1 className='text-center'>Fechamento do Mês</h1>
        
        <div className="mt-5 row text-left bg-white ">
          
          <p><b>Nome do usuário: </b>{this.state.dados.usuario}</p>
          <p><b>E-mail: </b>{this.state.dados.email}</p>
          <hr/>
          <p><b>Mês/Ano: </b> {this.state.dados.data}</p>
          <p><b>Dias Trabalhados: </b>{this.state.dados.contidadeDia}</p>
          <p><b>Horas Extra do Mês: </b>{this.state.dados.horasExtra}</p>
          <p><b>Horas convertida em minutos: </b>{this.state.dados.TotalMinutoExtra}</p>
          <hr/>
          <p><b>Salário: </b>R$:{this.state.dados.valorOriginal}</p>
          <p><b>Extra do Mês: </b>R$:{this.state.dados.valorExtra}</p>
          <p><b>Salário total: </b>R$:{this.state.dados.valorTotal}</p>

        </div>

        <div className="mt-5 row text-center">

          <div className='col-6'>
            <Link onClick={() => {gera_pdf(this.state.dados)}} to="" style={{"text-decoration": 'none'}}  className='btn-lg btn-success mr-5'> 
              Baixar
            </Link>
          </div>
          
          <div className='col-6'>
            <Link style={{"text-decoration": 'none'}} to='/fecharMes' className='btn-lg btn-secondary mr-5'>
              voltar
            </Link>
          </div>

        </div>

      </div>
    )
  }

  render(){
    return this.loginForm()
  }

}
