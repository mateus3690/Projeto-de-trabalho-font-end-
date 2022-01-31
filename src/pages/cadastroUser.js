import {Component} from 'react';
import {toast} from 'react-toastify/';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";
toast.configure()

export default class Login extends Component{

  state={
      nome:"",
      nascimento:"",
      cpf:"",
      email:"",
      senha:""
  }
  
  digitarCampoNome = (evento) =>{
    this.setState({nome:evento.target.value})
  }

  digitarCampoNascimento = (evento) =>{
    this.setState({nascimento:evento.target.value})
  }

  digitarCampoCpf = (evento) =>{
    this.setState({cpf:evento.target.value})
  }

  digitarCampoEmail = (evento) =>{
    this.setState({email:evento.target.value})
  }

  digitarCampoSenha = (evento) =>{
    this.setState({senha:evento.target.value})
  }

  loginPost = () =>{

    
    const notify = () =>{
      toast('teste')
    } 
    const dados = {
          "nome":this.state.nome,
          "nascimento":this.state.nascimento,
          "cpf":this.state.cpf,
          "email":this.state.email,
          "senha":this.state.senha
    }

    const setPost = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    }

    const url = "http://127.0.0.1:5000/v1/login/"

    fetch(url, setPost)
        .then(res => res.json())
        .then(data => {notify()/*
                        console.log(data)
                        if (data.mensagem){
                          alert(data.mensagem)
                        }*/
                      })
        .catch(erro => console.log(erro))
  }

  loginForm = () =>{

    return(
      <div className='container col-7 mt-3'>
        <h1 className='text-center'>Cadastra-se</h1>
        <form>

          <div className="form-group mt-3">
            <label for="nome">Nome</label>
            <input  value={this.state.nome}
                    onChange={this.digitarCampoNome}
                    id=  "nome" 
                    type="text" 
                    className="form-control" 
                    placeholder="Nome Completo"/>
          </div>

          <div className="form-group mt-3">
            <label for="nascimento">Data de Nascimento</label>
            <input  value={this.state.nascimento} 
                    onChange={this.digitarCampoNascimento} 
                    id="nascimento" 
                    type="date" 
                    className="form-control" 
                    placeholder="Data de Nascimento"/>
          </div>

          <div className="form-group mt-3">
            <label for="cpf">CPF</label>
            <input  value={this.state.cpf} 
                    onChange={this.digitarCampoCpf} 
                    id="cpf" 
                    type="text" 
                    className="form-control" 
                    placeholder="Seu CPF"/>
          </div>

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
              <Link onClick={() => this.loginPost()} style={{"text-decoration": 'none'}} to="/" className='btn-lg btn-danger mr-5'>
                Cadastrar
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
