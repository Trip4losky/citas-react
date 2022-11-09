import { useState, useEffect } from 'react'
import ListadoPacientes from "./components/ListadoPacientes"
import Form from "./components/Form"
import Header from "./components/Header"

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  // al no pasar una dependencia, esto quiere decir que se ejecuta una vez
  // esto lo hacemos porque vamos a comprobar si hay algo en el localStorage
  // que nos ayudará a no perder los datos al recargar la página
  useEffect(() => {
    const getLocalStorage = () => {
      // para evitar el null en caso de que no exista pacientes,
      // creamos pacientes como un arreglo vacío
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }
    getLocalStorage()
  }, [])

  // sincronizamos el useState con pacientes y para ello pasamos
  // nuestro arreglo de pacientes a String para guardarlo en un JSON
  // y de este modo usamos localStorage
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }
  
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes} 
          setPaciente={setPaciente}
          paciente={paciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App