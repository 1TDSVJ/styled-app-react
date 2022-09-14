import React from 'react';
import {FaTrashAlt as X} from "react-icons/fa";

import {DivTarefa} from '../../style/styled';


// const DivTarefa = styled.div`
// background-color: #ffb;
// border: 2px solid #333;
// box-shadow: 5px 5px 5px #333;
// padding: 20px;
// text-align: center;
// width: 350px;
// height: 200px;
// margin: 10px;
// h2,p{
//     padding-bottom: 10px;
//     }
// `

    
//div para pegar o componente desejado

export default function Tarefa(props){
    return(
        <DivTarefa>
            <h1>{props.titulo}</h1>
            <p>Para:{props.setor}</p>
            <p>{props.descricao}</p>
            <button onClick={props.remove}>X</button>
        </DivTarefa>
    )
}