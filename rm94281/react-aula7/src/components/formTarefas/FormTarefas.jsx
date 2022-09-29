import React from 'react';

export default function FormTarefas(props) {
  return (
    <div>
      <form method='post' onSubmit={props.funcAddTarefa}>
        <div>
          <label htmlFor='titulo'>Título:</label>
          <input type='text' name='titulo' placeholder='Título' value={props.novaTarefa.title} onChange={props.funcCaptura}/>
        </div>
        <div>
          <label htmlFor='setor'>Setor:</label>
          <input type='text' name='setor' placeholder='Setor' value={props.novaTarefa.setor} onChange={props.funcCaptura}/>
        </div>
        <div>
          <label htmlFor='descricao'>Descrição:</label>
          <textarea
            name='descricao'
            cols='30'
            rows='10'
            placeholder='Descrição...'
            value={props.novaTarefa.descricao} onChange={props.funcCaptura}></textarea>
        </div>
        <div>
            <button type='submit'>Adicionar</button>
        </div>
      </form>
    </div>
  );
}
