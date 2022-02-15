import {toast} from 'react-toastify/';
import 'react-toastify/dist/ReactToastify.css';
import load from './carregarPage';
toast.configure()


const deleteR = (bool=false, chave, registro) => {

    if (bool){
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

        const url = `http://127.0.0.1:5000/v1/pontos/${chave}/${registro}/`
        const config = {
            method: 'DELETE',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        }
        fetch(url, config)
            .then(response => response.json())
            .then(data => {
                let bool = false
                        if (data.status in 'Ok'){
                          bool = true
                        }
                        switch (bool) {
                          case true:
                            notify('sucesso', data.mensagem)
                            break
                          default:
                            notify('erro', data.mensagem)
                            break
                        }
                        if(bool){
                          load()
                        }
                }
            )
    }
}

export default deleteR