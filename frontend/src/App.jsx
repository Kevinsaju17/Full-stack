import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'




import Home from './components/Home'
import Create from './components/Create'
import Edit from './components/Edit'
import Delete from './components/Delete'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar
    content={
          
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Create" element={<Create/>}/>
      <Route path="/Edit/:id" element={<Edit/>}/>
      <Route path="/Delete/:id" element={<Delete/>}/>

    </Routes>

    }
    />
 


    
    </>
  )
}

export default App
