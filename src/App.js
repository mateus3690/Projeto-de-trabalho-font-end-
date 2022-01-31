import Menu   from './componentes/navbar' 
import Banner from './componentes/banner'
import Footer from './componentes/footer'
import Table  from './componentes/table'

import { BrowserRouter as Router ,Routes, Route , Link} from "react-router-dom";
import Login from './pages/cadastroUser'

function App() { 

  return (
    <Router>
      <div className='container'>
       
        <Menu/>

        <Banner/>

        <Routes>
          <Route path="/" element={<Table />}></Route>
          <Route path="/cadastro-se" element={<Login />}></Route>
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
