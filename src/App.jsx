
import { useState } from 'react'
import './App.css'
import Boleto from './Components/Boleto'
import Formulario from './Components/Formulario'

function App() {
  const [invt, setInvt] = useState({
    persona: "",
    mascota: ""

  })


  return (
    <>
      <Formulario setInvt={setInvt} />
      <Boleto invt={invt} />
    </>
  )
}

export default App
