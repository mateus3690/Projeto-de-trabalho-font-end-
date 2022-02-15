import {Component} from 'react';
import {toast} from 'react-toastify/';
import 'react-toastify/dist/ReactToastify.css';

import load from '../utils/carregarPage'

import {Link} from "react-router-dom";
toast.configure()

export default class cadastroPonto extends Component{
 
  state={
    data_dia:"",
    primeiro_ponto: "",
    segundo_ponto:  "",
    terceiro_ponto: "",
    quarto_ponto:   "",
    return:""
  }
  
  digitarDataDoDIa = (evento) =>{
    this.setState({data_dia:evento.target.value})
  }

  digitarPonto1 = (evento) =>{
    this.setState({primeiro_ponto:evento.target.value})
  }

  digitarPonto2 = (evento) =>{
    this.setState({segundo_ponto:evento.target.value})
  }

  digitarPonto3 = (evento) =>{
    this.setState({terceiro_ponto:evento.target.value})
  }

  digitarPonto4 = (evento) =>{
    this.setState({quarto_ponto:evento.target.value})
  }

  PontoPost = () =>{

    
    const notify = (tipo, msg) =>{
      // eslint-disable-next-line default-case
      switch (tipo) {
        case 'sucesso':
          toast.success(`Ponto cadastrado com sucesso!`,
                        {autoClose:10000});
          break
        case 'erro':
          toast.error(`Ops! ocorreu um erro, ${msg}, por favor vá até o menu e tente novamente!`,{autoClose: 10000});
          break
      }
   
    } 
    const dados = {
      "chave":this.props.chave,
      "primeiro_ponto":`${this.state.data_dia} ${this.state.primeiro_ponto}:00`,
      "segundo_ponto": `${this.state.data_dia} ${this.state.segundo_ponto}:00`,
      "terceiro_ponto":`${this.state.data_dia} ${this.state.terceiro_ponto}:00`,
      "quarto_ponto":  `${this.state.data_dia} ${this.state.quarto_ponto}:00`
    }

    const setPost = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    }

    const url = "http://127.0.0.1:5000/v1/pontos/"

    fetch(url, setPost)
        .then(res => (res.json())
        .then(data => {
              console.log(data)
              var bool = false
              if (data.dia_semana){
                bool = true
              }

              switch (bool) {
                case true:
                  notify('sucesso')
                  break
                default:
                  notify('erro', data.mensagem)
                  break
              }

              if(bool)
                load(true)

            }
          )
        ).catch(erro => console.log(erro))
  }

  loginForm = () =>{

    return(
      <div className='container col-7 mt-3'>
        <h1 className='text-center'>Cadastro de Ponto</h1>
        <form>

          <div className="form-group mt-3">
            <label for="datadia">Data do dia</label>
            <input  value={this.state.data_dia}
                    onChange={this.digitarDataDoDIa}
                    id=  "datadia" 
                    type="date" 
                    className="form-control" 
                   />
          </div>

          <div className="form-group mt-3 row">

            <div className='col-6'>
              <label for="hora1">Primeiro Horário</label>
              <input  value={this.state.primeiro_ponto} 
                      onChange={this.digitarPonto1} 
                      id="hora1" 
                      type="time" 
                      className="form-control"/>
            </div>   

             <div className='col-6'>
              <label for="hora2">Segundo Horário</label>
              <input  value={this.state.segundo_ponto} 
                      onChange={this.digitarPonto2} 
                      id="hora2" 
                      type="time" 
                      className="form-control"/>
            </div>

          </div>

          <div className="form-group mt-3 row">

          <div className='col-6'>
            <label for="hora3">Terceiro Horário</label>
            <input  value={this.state.terceiro_ponto} 
                    onChange={this.digitarPonto3} 
                    id="hora3" 
                    type="time" 
                    className="form-control"/>
          </div>   

          <div className='col-6'>
            <label for="hora4">Quarto Horário</label>
            <input  value={this.state.quarto_ponto} 
                    onChange={this.digitarPonto4} 
                    id="hora4" 
                    type="time" 
                    className="form-control"/>
          </div>

          </div>

          <div className="form-group mt-3 row text-center">
            <div className='col-6'>
              <Link onClick={() => {this.PontoPost()}}  style={{"text-decoration": 'none'}} to={this.state.return === '' && '/'} className='btn-lg btn-danger mr-5'>
                Cadastrar
              </Link>
            </div>
            <div className='col-6'>
              <Link style={{"text-decoration": 'none'}} to='/' className='btn-lg btn-secondary mr-5'>
                Cancelar
              </Link>
            </div>

          </div>

        </form>

      </div>
    )
  }

  render(){
    return this.loginForm()
  }

}
