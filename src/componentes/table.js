

function table (){

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
                <tr>
                <th scope="row">Sábado</th>
                <td>01/01/2022 08:00:00h</td>
                <td>01/01/2022 12:00:00h</td>
                <td>01/01/2022 13:00:00h</td>
                <td>01/01/2022 18:00:00h</td>
                <td>0 min</td>
                </tr>
                
            </tbody>
            </table>
            <hr></hr>
        </div>
        

    )

}

export default table;