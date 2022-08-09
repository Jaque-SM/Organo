import "./Formulario.css"
import CampoText from "../campoText/CampoText"
import ListaSuspensa from "../listaSuspensa"
import Botao from "../botao"
import { useState } from "react"

const Formulario = (props) => {

    const times = [
        'Selecione o item correto...',
        'Programação',
        'Front-End',
        'Devops',
        'Mobile',
        "UX Design",
        "Data Science",
        'Inovação e Gestão'
    ]

    const [nome, setNome]=useState('')
    const [cargo, setCargo]=useState('')
    const [telefone, setTelefone]=useState('')
    const [time, setTime]=useState('')

    const Salvar = (evento) =>{
        evento.preventDefault()
        props.Cadastro({
            nome,
            cargo,
            telefone,
            time
    })
    }
    return (
        <section className="formulario">
            <form onSubmit={Salvar}>
                <h2>*Preencha os dados para criar o card do colaborador</h2>
            <CampoText obrigatorio={true} 
            label="Nome Completo: " 
            placeholder="Digite o seu nome..."
            valor={nome}
            Alterado={valor=>setNome(valor)}/>

            <CampoText obrigatorio={true} 
            label="Cargo: " 
            placeholder="Digite o seu cargo..."
            valor={cargo}
            Alterado={valor=>setCargo(valor)} />

            <CampoText obrigatorio={true} 
            label="Telefone: " 
            placeholder="Digite o seu telefone..."
            valor={telefone}
            Alterado={valor=>setTelefone(valor)} />

            <CampoText  
            label="Imagem: "
            placeholder="Digite o seu endereço da imagem..."/>
           
            <ListaSuspensa 
            obrigatorio={true}
             valor={time}
            Alterado={valor=> setTime(valor)}
            label="Time: "
            itens={props.times} />

            <Botao texto="Criar Card"/>       
         </form>
        </section>
    )  
}
export default Formulario


