import { useState } from 'react';
import Banner from './componentes/banner/banner';
import Formulario from './componentes/formulario';

function App() {

  const [colaboradores, setColaboradores]= useState([])

  const NovoCadastro= (colaborador)=>{
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario Cadastro={colaborador=>NovoCadastro(colaborador)}/>
    </div>
  );
}

export default App;
