import Colaborador from '../colaborador'
import './time.css'

const Time = (props) => {

    const coresCss= {backgroundColor: props.corSecundaria}

    const corLetras={borderColor: props.corPrimaria}

    return (
     
         <section className='time' style={coresCss}>
        <h3 style={corLetras}>{props.nome}</h3>

        {props.colaboradores.map(colaborador => 
        <Colaborador nome={colaborador.nome} 

        cargo={colaborador.cargo}
        telefone={colaborador.telefone}
        imagem={colaborador.imagem}/>)}
        </section>
    )

}
export default Time