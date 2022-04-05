import {Component} from 'react';
import {toast} from 'react-toastify/';
import 'react-toastify/dist/ReactToastify.css';

import deleteR from '../utils/restDelete'

import {Link} from "react-router-dom";
toast.configure()

export default class editarPonto extends Component{
 
  state={
    data_dia:"",//2021-01-10
    primeiro_ponto: "",//10:00
    segundo_ponto:  "",
    terceiro_ponto: "",
    quarto_ponto:   "",
    registro:sessionStorage.getItem("registro")
  }
  
  responseGet = () => {
      
    const url = `http://127.0.0.1:5000/v1/pontos/${this.props.chave}/${this.state.registro}/`
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
          const dados = data[0]  
          this.setState({data_dia:dados.primeiro_ponto.slice(0,10)})
          this.setState({primeiro_ponto:dados.primeiro_ponto.slice(11,16)})
          this.setState({segundo_ponto:dados.segundo_ponto.slice(11,16)})
          this.setState({terceiro_ponto:dados.terceiro_ponto.slice(11,16)})
          this.setState({quarto_ponto:dados.quarto_ponto.slice(11,16)})                       
        }
      )
  }

  componentDidMount() {
    this.responseGet()
  }

  digitarDataDoDIa = (evento) =>{
    this.setState({data_dia:evento.target.value})
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

  
  PontoAlt = () =>{

    
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
      "primeiro_ponto":`${this.state.data_dia} ${this.state.primeiro_ponto}:00`,
      "segundo_ponto": `${this.state.data_dia} ${this.state.segundo_ponto}:00`,
      "terceiro_ponto":`${this.state.data_dia} ${this.state.terceiro_ponto}:00`,
      "quarto_ponto":  `${this.state.data_dia} ${this.state.quarto_ponto}:00`
    }
 
    const setPut = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    }

    const url = `http://127.0.0.1:5000/v1/pontos/${this.props.chave}/${this.state.registro}/`

    fetch(url, setPut)
        .then(res => (res.json())
        .then(data => {
              var bool = false
              if (data.status === 'OK'){
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
                this.setState({return:'/'})
                

            }
          )
        ).catch(erro => console.log(erro))
  }

  loginForm = () =>{
    return(
      <div className='container col-7 mt-3'>
        <h1 className='text-center'>Ponto </h1>
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
            <div className='col-4'>
              <Link onClick={() => {this.PontoAlt()}} to={'/'}  style={{"text-decoration": 'none'}}  className='btn-lg btn-success mr-5'> 
                Aplicar
              </Link>
            </div>

            <div className='col-4'>
              <Link onClick={() => {
                  deleteR(true, this.props.chave,this.state.registro)
              }}  style={{"text-decoration": 'none'}} to={'/'} className='btn-lg btn-danger mr-5'>
                Excluir
              </Link>
            </div>

            <div className='col-4'>
              <Link style={{"text-decoration": 'none'}} to='/' className='btn-lg btn-secondary mr-5'>
                voltar
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
