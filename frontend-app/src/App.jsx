import './App.css'
import Welcome from './components/Welcome'
import {Routes, Route} from 'react-router-dom'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './components/Home'
import Update from './components/auth/Update'
// eslint-disable-next-line no-unused-vars
import React from "react";
import Informacoes from "./components/utilities/Informacoes.jsx";
import Sugestoes from "./components/utilities/Sugestoes.jsx";
import Dashboard from "./components/Dashboard.jsx";
import ProtectedAccess from './components/reutilizaveis/ProtectedAccess.jsx'
import MealCard from './components/reutilizaveis/MealCard.jsx'

function Logout() {
  return null;
}

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/update' element={<ProtectedAccess><Update/></ProtectedAccess>}/>
        <Route path='/meal' element={<ProtectedAccess><MealCard/></ProtectedAccess>}/>
        <Route path='/refeicoes-do-dia' element={<ProtectedAccess><Dashboard/> </ProtectedAccess>}/>
        <Route path='/home' element={<ProtectedAccess><Home/></ProtectedAccess>}/>
        <Route path="/informacoes" element={<ProtectedAccess> <Informacoes/></ProtectedAccess>} />
        <Route path="/sugestoes" element={<ProtectedAccess> <Sugestoes/> </ProtectedAccess>} />
        <Route path="/logout" element={<ProtectedAccess><Logout/></ProtectedAccess>} />

      </Routes>
    </>
  )
}

export default App
