import './lista.css';

const ListaSuspensa = (props) =>{
    console.log(props.itens)

    return (
        <div className='ListaTime'>
            <label>{props.label}</label>
            <select onChange={evento=>props.Alterado(evento.target.value)} required={props.required} value={props.value}>
                <option value=""></option>
                {props.itens.map(item => {
                  return <option key={item}>{item} </option>})}
            </select>

        </div>
    )
}
export default ListaSuspensa