import {Component} from 'react';
import {Link} from "react-router-dom";
import load from '../utils/carregarPage'

import {toast} from 'react-toastify/';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default class Login extends Component{

  state={
    email:"",
    senha:"",
  }
  
  digitarCampoEmail = (evento) =>{
    this.setState({email:evento.target.value})
  }

  digitarCampoSenha = (evento) =>{
    this.setState({senha:evento.target.value})
  }
  
  logar = () =>{

    const notify = (tipo, msg) =>{
      // eslint-disable-next-line default-case
      switch (tipo) {
        case 'sucesso':
          toast.success(`Seja bem vindo ${msg}!`,
                        {autoClose:8000});
          break
        case 'erro':
          toast.error(`Ops! ocorreu um erro, ${msg}, por favor tente novamente!`,{autoClose: 10000});
          break
      }
   
    }

    const setGet = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
   
    const url = `http://127.0.0.1:5000/v1/login/${this.state.email}/${this.state.senha}/`
    fetch(url, setGet)
          .then(response => response.json())
          .then(data => {
                        console.log(data)
                        let bool = false
                        if (data.id){
                          bool = true
                        }
                        switch (bool) {
                          case true:
                            notify('sucesso', data.nome)
                            sessionStorage.setItem("nome", data.nome)
                            sessionStorage.setItem("cpf", data.cpf)
                            sessionStorage.setItem("email",data.email)
                            sessionStorage.setItem("nascimento",data.nascimento)
                            sessionStorage.setItem("senha",this.state.senha)
                            break
                          default:
                            notify('erro', data.mensagem)
                            break
                        }
                        if(bool)
                          load(true)

          }).catch(erro => console.log(erro))
    
  }

  loginForm = () =>{

    return(
      <div className='container col-4 mt-5'>
        <h1 className='text-center'>LOGIN</h1>
        <form>

          <div className="form-group mt-3">
            <label for="email">E-mail</label>
            <input  value={this.state.email} 
                    onChange={this.digitarCampoEmail}
                    id="email" 
                    type="email" 
                    className="form-control" 
                    placeholder="Seu E-mail"/>
          </div>

          <div className="form-group mt-3">
            <label for="senha">Senha</label>
            <input  value={this.state.senha} 
                    onChange={this.digitarCampoSenha}
                    id="senha" 
                    type="password" 
                    className="form-control" 
                    placeholder="Nova Senha"/>
          </div>

          <div className="form-group mt-3 row text-center">
            <div className='col-6'>
              <Link to="/" 
                    onClick={() => {this.logar() }}  
                    style={{"text-decoration": 'none'}}  className='btn-lg btn-danger mr-5'>
                Entrar
              </Link>
            </div>
            <div className='col-6'>
              <Link style={{"text-decoration": 'none'}} to="/" className='btn-lg btn-secondary mr-5'>
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
