import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Gallery from './components/Glimpses'

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Gallery></Gallery>
    </>
  )
}

export default App
