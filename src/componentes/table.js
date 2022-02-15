import React from "react";
import fnc_img from '../componentes/imgs'
import edit from '../static/img/lapis.png'
import {Link} from "react-router-dom";
//import deleteR from '../utils/restDelete'
//import load from '../utils/carregarPage'
export default class Table extends React.Component{

    state={
        pontos:[]
    }

    responseGet = () => {
      
      const url = `http://127.0.0.1:5000/v1/pontos/${this.props.chave}/pass/`
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
                        
                          this.setState({pontos:data})  
              }
          )
    }

    componentDidMount() {
      this.responseGet()
    }

    getTable = () =>{
      return (       
        <div className="mt-5 w-100 text-center">

            <h1>PONTO CADASTRADOS:</h1>

            <table className="table table-dark table-striped mb-5">
            <thead>
                <tr>
                <th scope="col">Dia da Semana</th>
                <th scope="col">1º Ponto</th>
                <th scope="col">2º Ponto</th>
                <th scope="col">4º Ponto</th>
                <th scope="col">3º Ponto</th>
                <th scope="col">Saldo do dia - (Min.)</th>
                </tr>
            </thead>
            <tbody>
                {this.state.pontos.mensagem 
                   ?
                  <tr>
                  <th scope="row">-</th>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  </tr>
                    :
                  this.state.pontos.map(ponto => {
                    return(<tr key={ponto.id}>
                            <th scope="row">{ponto.dia_semana}</th>
                            <td>{ponto.primeiro_ponto}</td>
                            <td>{ponto.segundo_ponto}</td>
                            <td>{ponto.terceiro_ponto}</td>
                            <td>{ponto.quarto_ponto}</td>
                            <td>{ponto.saldo_dia}</td>
                            {this.state.pontos && <td>
                                                      <Link
                                                        onClick={()=>{sessionStorage.setItem("registro", ponto.registro)}}
                                                        to='/editarPonto'> {fnc_img(edit, 20, 20,)} 
                                                      </Link>
                                                    </td>}
                          </tr>)
                       }
                    )                 

                   
                }
            </tbody>
            </table>
            <hr></hr>
        </div>
    )
    }

    render(){
      return this.getTable()    
    } 
}
