import React, { useState } from 'react'
import { DivLista } from '../style/styled'
import FormTarefas from './FormTarefas'
import Tarefa from './Tarefa'

export default function ListaTarefas() {
  
  const[tarefa, setTarefa] = useState([
    {
    titulo : "Lista de Pagamento",
    setor : "Dep. Vendas",
    descricao : "Levantar os valores de vendas."
    }
    ,
    {
      titulo : "Planilha de Salários",
      setor : "Dep. Pessoal",
      descricao : "Gerar planilhas."
    }
  
  ])

  //ADD TAREFA
  const addTarefa = (e)=>{
    e.preventDefault()

    //Adicionando uma nova tarefa
    setNTarefa({titulo:"",setor:"",descricao:""})
    setTarefa([...tarefa, nTarefa])
   // const novaTarefa = {
   //   titulo : "Planilha de Notas",
   //   setor : "Dep. Graduação",
   //   descricao : "Lançar notas."
   // }

    //ADICIONANDO MAIS UAM TAREFA NA LISTA
    // setTarefa([...tarefa, novaTarefa])
  }
  
  // Criando state de nova tarefa
  const [nTarefa, setNTarefa] = useState({titulo:"",setor:"",descricao:""})

  //FUNÇÃO DE CAPTURA DOS DADOS FORM
  const captura = (e)=>{
      const {value,name} = e.target

      if(name === "titulo"){
        setNTarefa({titulo: value,setor: nTarefa.setor,descricao: nTarefa.descricao})
      } else if(name === "setor"){
        setNTarefa({titulo: nTarefa.titulo,setor: value,descricao: nTarefa.descricao})
      } else if(name === "descricao"){
      setNTarefa({titulo: nTarefa.titulo,setor: nTarefa.setor,descricao: value})
      }
    }

  return (
    <DivLista>
      
      <FormTarefas
        funcaoAddTarefa={addTarefa}
        novaTarefa={nTarefa}
        oQueFoiDigitado={captura}      
      />

      {tarefa.map((tar,i)=>
        <Tarefa
        key={i}
        tituloProps={tar.titulo}
        setorProps={tar.setor}
        descricaoProps={tar.descricao}
        />
      )}    
    </DivLista>
    
  )
}
