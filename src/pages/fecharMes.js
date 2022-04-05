import {Component} from 'react';
import {toast} from 'react-toastify/';
import 'react-toastify/dist/ReactToastify.css';

import {Link} from "react-router-dom";
toast.configure()

export default class editarPonto extends Component{
 
  state={
    data_mes: ""
  }
  
  digitarData = (evento) =>{
    this.setState({data_mes:evento.target.value})
  }

  loginForm = () =>{
    return(
      <div className='container col-7 mt-3'>
        <h1 className='text-center'>Fechamento do Mês</h1>
        <form>

          <div className="form-group mt-3">
           <label for="nascimento">Data Final do Mês</label>
            <input  value={this.state.data_mes} 
                    onChange={this.digitarData} 
                    id="nascimento" 
                    type="date" 
                    className="form-control" 
                    placeholder="Mês de Fechamento"/>
          </div>  
     
          <div className="form-group mt-3 row text-center">

            <div className='col-6'>
              <Link onClick={() => {sessionStorage.setItem("dataMes", this.state.data_mes)}} to="/formFechamento" style={{"text-decoration": 'none'}}  className='btn-lg btn-success mr-5'> 
                Consultar
              </Link>
            </div>
            
            <div className='col-6'>
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
