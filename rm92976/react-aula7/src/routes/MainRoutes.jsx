import React from 'react'
import {Route, Routes} from 'react-router-dom'
import FormTarefas from '../components/formTarefas/FormTarefas'
import Home from '../components/Home/Home'
import ListaTarefas from '../components/listaTarefas/ListaTarefas'

export default function MainRoutes(){
    return(
        <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/lt' element={<ListaTarefas/>} />
            <Route path='/add' element={<FormTarefas/>} />
        </Routes>
        </>
    )
}