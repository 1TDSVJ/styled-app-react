import styled from 'styled-components'

//CRIANDO MÓDULO DE ESTILOS/STYLED

export const DivTarefa = styled.div`
    background-color: #ffb;
    border: 2px solid #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    text-align: center;
    width: 350px;
    height: 200px;
    margin: 10px;
    position: relative;
    h2,p{ padding-bottom: 10px; }
    button{position: absolute; bottom: 10px; right: 10px;}
`
export const DivLista = styled.div`
    width: 100%;
    padding: 20px;
    min-height: 85vh;
    background-color: #ccc;
    display: flex; flex-wrap: wrap;
    justify-content: space-around;
`