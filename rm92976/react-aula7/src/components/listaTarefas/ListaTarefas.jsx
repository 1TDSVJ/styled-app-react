import React, {useState} from 'react';
import { DivLista, Botao } from '../../style/styled';
import FormTarefas from '../formTarefas/FormTarefas';
import Tarefa from '../tarefa/Tarefa';




export default function ListaTarefas() {

  const [tarefa, setTarefa] = useState([{
    titulo: "Lista de Pagamento",
    setor: "Dep. Vendas",
    descricao: "Levantar os valores de vendas",
  },
  {
    titulo: "Planilha de Salários",
    setor: "Dep. Pessoal",
    descricao: "Gerar planilhas",
  },

])

//add tarefa
const addTarefa = (e) => {
  
  e.preventDefault()
    //Adiconando nova tarefa
    setnTarefa( { titulo: "", setor: "", descricao: ""})
  
  //const novaTarefa ={
    //titulo: "Planilha de notas",
   // setor: "Dep. Graduação",
   // descricao: "Lançar notas",
  //}
 setTarefa([...tarefa, nTarefa])
}

//Criando state da nova Tarefa
const [nTarefa, setnTarefa] = useState({
  titulo: "", setor: "", descricao: ""
})

//Função de captura dos dados do formulário
const captura = (e) => {
  const{value,name} = e.target

    if(name === "titulo"){
      setnTarefa({ titulo: value , setor: nTarefa.setor , descricao: nTarefa.descricao})
    }else if(name === "setor"){
      setnTarefa({titulo: nTarefa.tiulo, setor: value, descricao: nTarefa.descricao})
    }else if(name === "descricao"){
      setnTarefa({titulo: nTarefa.titulo, descricao: value, setor: nTarefa.setor})
    }
}


const removerTarefa = tar =>{
  let lista = tarefa
  lista = lista.filter((t)=> t!== tar)
  setTarefa(lista)
}

 return (
    <DivLista>
     <FormTarefas 
     funcaoAddTarefa={addTarefa} 
     novaTarefa={nTarefa}
     oQueFoiDigitado={captura} />

      {tarefa.map((tar, i)=>
      <Tarefa
      key={i}
      tituloProps={tar.titulo}
      setorProps={tar.setor}
      descricaoProps={tar.descricao}
      remove={removerTarefa.bind(this,tar)}
      />
      )}
      </DivLista>
 )
      }
