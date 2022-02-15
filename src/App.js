/* eslint-disable react/jsx-no-comment-textnodes */
import Menu   from './componentes/navbar' 
import Footer from './componentes/footer'
import Table  from './componentes/table'
import Banner from './componentes/banner'

import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import UserCadastro from './pages/cadastroUser'
import Login from './pages/login'
import BaterPonto from './pages/cadastroPonto'
import EditarPonto from './pages/editarPonto'
import React from 'react';

export default class App extends React.Component { 

  state = {
    email:"",
    senha:"",
    nascimento:"",
    nome:"",
    cpf:sessionStorage.getItem("cpf")
  }
  
  autenticar = (userEmail, userSenha, userCpf, userNascimento ,userNome) => {
    this.setState({email:userEmail,
                   senha:userSenha, 
                   cpf:userCpf, 
                   nome:userNome, 
                   nascimento:userNascimento
    })
    return true
  }

  render(){
    console.log(this.state.cpf)
    return (
        <Router>
          <div className='container'>
          
            <Menu nome={sessionStorage.getItem("nome")}></Menu>

            <Routes>
              //rotas menu principal
              {this.state.cpf?
                <Route path="/" element={<><Banner true={this.state.cpf} /><Table chave={this.state.cpf}/></>}></Route> :
                <Route path="/" element={<Banner />}></Route>
              }
              <Route path="/cadastroPonto" element={<BaterPonto chave={this.state.cpf}/>}></Route>
              <Route path="/editarponto" element={<EditarPonto chave={this.state.cpf} />}></Route>
              
              //rotas da opção autenticação
              <Route path="/login" element={<Login login={this.autenticar} />}></Route>
              <Route path="/cadastra-se" element={<UserCadastro/>}></Route>

            </Routes>

            <Footer nome={sessionStorage.getItem("nome")}/>
          </div>
        </Router>
      ) 
  }
}

//export default App;
