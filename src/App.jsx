import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Session } from './pages/session/Session';
import { Home } from './pages/home/Home';
import { LoginFormComponent } from './pages/session/components/LoginFormComponent';
import { RegisterFormComponent } from './pages/session/components/RegisterFormComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css'
import './assets/css/Login.css'
import './assets/css/Home.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/session' element={<Session/>}/>
          <Route path='/session/login' element={<LoginFormComponent/>}/>
          <Route path='/session/signup' element={<RegisterFormComponent/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
