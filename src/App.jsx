import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import "./App.css"
function App() {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details/>} />
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </div>
  )
}

export default App