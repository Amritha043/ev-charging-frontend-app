import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddVehicle from './components/AddVehicle'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ViewVehicle from './components/Viewvehicle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<AddVehicle/>}/>
      <Route path="/view"element={<ViewVehicle/>}/>
   </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
