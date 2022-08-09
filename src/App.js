import { useState } from 'react';
import Banner from './componentes/banner/banner';
import Formulario from './componentes/formulario';
import Rodape from './componentes/rodape';
import Time from './componentes/time';

function App() {

  const times=[
    {
      nome:"Programação",
      corPrimaria: "#00BFFF",
      corSecundaria: "#87CEFA"

    },
    {
      nome:"Front-End",
      corPrimaria: "#4682B4",
      corSecundaria: "#B0C4DE"

    },
    {
      nome:"Devops",
      corPrimaria: "#00FF7F",
      corSecundaria: "#98FB98"

    },
    {
      nome:"Mobile",
      corPrimaria: "#7CFC00",
      corSecundaria: "#ADFF2F"

    },
    {
      nome:"Inovação e Gestão",
      corPrimaria: "#BC8F8F",
      corSecundaria: "#FFDEAD"

    },
    {
      nome:"UX Design",
      corPrimaria: "#7B68EE",
      corSecundaria: "#BA55D3"

    },
    {
      nome:"Data Science",
      corPrimaria: "#C71585",
      corSecundaria: "#FFB6C1"

    }
  ]
  const [colaboradores, setColaboradores]= useState([])

  const NovoCadastro= (colaborador)=>{
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time=>time.nome, time =>time.telefone)} Cadastro={colaborador=>NovoCadastro(colaborador)}/>
     
    {times.map(time => <Time
      key={time.nome}
      nome={time.nome}
      telefone={time.telefone}
      corPrimaria={time.corPrimaria}
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time===time.nome)}
    />)}  
    <Rodape/>
    </div>
  )
}

export default App;
