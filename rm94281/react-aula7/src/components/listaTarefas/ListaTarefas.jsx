import React, { useState } from 'react';
import Tarefa from '../tarefa/Tarefa';
import { DivLista } from '../../style/styled';
import FormTarefas from '../formTarefas/FormTarefas';
export default function ListaTarefas() {
  const [tarefa, setTarefa] = useState([
    {
      titulo: 'Lista de Pagamento',
      setor: 'Dep. Vendas',
      descricao: 'Levantar os valores das vendas',
    },
    {
      titulo: 'Planilha de Salários',
      setor: 'Dep. Pessoal',
      descricao: 'Gerar planilhas',
    },
  ]);

  const addTarefa = (e) => {
    e.preventDefault();
    setNTarefa({ titulo: '', setor: '', descricao: '' });
    setTarefa([...tarefa, nTarefa]);
  };

  const [nTarefa, setNTarefa] = useState({
    titulo: '',
    setor: '',
    descricao: '',
  });

  const captura = (e) => {
    const { value, name } = e.target;

    if (name === 'titulo') {
      setNTarefa({
        titulo: value,
        setor: nTarefa.setor,
        descricao: nTarefa.descricao,
      });
    }
    if (name === 'setor') {
      setNTarefa({
        titulo: nTarefa.titulo,
        setor: value,
        descricao: nTarefa.descricao,
      });
    }
    if (name === 'descricao') {
      setNTarefa({
        titulo: nTarefa.titulo,
        setor: nTarefa.setor,
        descricao: value,
      });
    }
  };
  return (
    <DivLista>
      <FormTarefas
        novaTarefa={nTarefa}
        funcAddTarefa={addTarefa}
        funcCaptura={captura}
      />
      {tarefa.map((t, i) => (
        <Tarefa
          key={i}
          titulo={t.titulo}
          setor={t.setor}
          descricao={t.descricao}
        />
      ))}
    </DivLista>
  );
}
