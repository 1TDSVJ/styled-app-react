import React, { useState } from "react"
import { DivLista } from "../../style/styled"
import Tarefa from "../terefa/Tarefa"

const ListaTarefas = () => {

    const [tarefa,setTarefa]= useState([{
        titulo: 'lista de pagamento',
        setor: 'Dep. Vendas',
        descricao: 'Levantar os valores das vendas',  
        },
        {
        titulo: 'Planilha de Salario',
        setor: 'Dep. Pessoal',
        descricao: 'Gerar planilhas',
        },
    ])
    
    return(
        <DivLista>
            
        </DivLista>
    )
}

export default ListaTarefas