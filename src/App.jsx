import { useState } from 'react'
import ListadoPacientes from "./components/ListadoPacientes"
import Form from "./components/Form"
import Header from "./components/Header"

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          pacientes = {pacientes}
          setPacientes = {setPacientes} 
        />
        <ListadoPacientes 
          pacientes={pacientes} 
          setPaciente={setPaciente}
          paciente={paciente}
        />
      </div>
    </div>
  )
}

export default App