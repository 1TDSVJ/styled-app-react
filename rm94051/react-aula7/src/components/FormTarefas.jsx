import React from "react"

const FormTarefas = props=>{
    
    return(
        <div>
            <form method="post" onSubmit={props.addTarefa}>
                <div>
                    <input name="titulo" placeholder="Título" value={props.tarefa.titulo} onChange={props.digit}/>
                </div>
                <div>
                    <input name="setor" placeholder="Setor" value={props.tarefa.setor} onChange={props.digit}/>
                </div>
                <div>
                    <input name="descricao" placeholder="Descrição" value={props.tarefa.descricao} onChange={props.digit}/>
                </div>
                <button type="submit"></button>
            </form>
        </div>
    )
}