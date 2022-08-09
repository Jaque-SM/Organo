import './colaborador.css'

function Colaborador (props){
    return (  
    <div className='colaborador'>
        <div>
        <img src={props.imagem} />

        </div>
        <div>

        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
        <h5>{props.telefone}</h5>

        </div>
        </div>


        
    )
    
}
export default Colaborador