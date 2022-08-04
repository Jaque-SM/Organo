import { useState } from 'react'
import './CampoText.css'

function CampoText (props)  {
    
    const placeholderModificada = `${props.placeholder}...`

    function Digitado (campo) {
        props.Alterado(campo.target.value)
        
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={Digitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )


}
export default CampoText