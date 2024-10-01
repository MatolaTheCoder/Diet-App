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
        <Route path='/update' element={<Update/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/informacoes" element={<Informacoes/>} />
        <Route path="/sugestoes" element={<Sugestoes/>} />
        <Route path="/logout" element={<Logout/>} />

      </Routes>
    </>
  )
}

export default App
