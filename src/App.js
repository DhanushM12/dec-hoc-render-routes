import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Login'
import NotFound from './NotFound';
import Home from './Home';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>

    </div>
  )
}

export default App