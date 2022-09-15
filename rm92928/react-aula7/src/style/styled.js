import styled from 'styled-components';

export const DivLista = styled.div`
    width: 100%;
    padding: 20px;
    min-height: 85vh;
    background-color: #ccc;
    display: flex; flex-wrap: wrap;
    justify-content: space-around;

    .btnTarefa{
        display: block;
        height:5vh;
        margin: auto;
        border-radius : 5px;
        padding: 1vh 2vw;
        border: solid 2px #00ff00;
        color : #00ff00;
        font-size : 1.5rem;    
    }

`
 
export const DivTarefa = styled.div`
    background-color: #ffb;
    border: 2px solid #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    text-align: center;
    width: 350px;
    height: 200px;
    margin: 10px;
    h2,p{ padding-bottom: 10px; }
`

export const Botao = styled.button`
    border-radius : 5px;
    padding: 1vh 2vw;
    margin: auto;
    display: block;
    border: solid 2px #00ff00;
    color : #00ff00;
    font-size : 1.5rem;
`

export const DivForm = styled.div`
    width: 100%;
    padding: 20px;
    background-color: #993;
    
    form{width:50%; margin:auto;}
    form input, form textarea{padding:5px; width:80%;}
    form textarea{height: 80px;}
    form button{padding: 10px; background: #3c3; color: #fff;}
`
