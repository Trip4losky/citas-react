import { useState, useEffect } from "react"
import Error from "./Error"

const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [mascota, setMascota] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintoma, setSintoma] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setMascota(paciente.mascota)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintoma(paciente.sintoma)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    // Validación del formulario
    if ([mascota, propietario, email, fecha, sintoma].includes('')) {
      setError(true)
      return
    }

    setError(false)

    // objeto de paciente
    const objPaciente = {
      mascota,
      propietario,
      email,
      fecha,
      sintoma
    }

    // control para diferenciar entre editar y agregar registro
    if(paciente.id){
      // Editar registro
      objPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState )
      setPacientes(pacientesActualizados)
      //Limpiar State
      setPaciente({})
    }else{
      // Nuevo registro
      objPaciente.id = generarId()
      setPacientes([...pacientes, objPaciente])
    }

    // reiniciar formulario
    setMascota('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintoma('')

  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>

      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' onSubmit={handleSubmit}>

        {error && <Error><p>Todos los campos son obligatorios</p></Error>}

        <div className='mb-5'>
          <label htmlFor="mascota" className='block text-grey-700 uppercase font-bold'>Nombre Mascota</label>
          <input id="mascota" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type='text' placeholder='Nombre de la Mascota' value={mascota} onChange={(e) => setMascota(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label htmlFor="propietario" className='block text-grey-700 uppercase font-bold'>Nombre Propietario</label>
          <input id="propietario" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type='text' placeholder='Nombre del Propietario' value={propietario} onChange={(e) => setPropietario(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label htmlFor="email" className='block text-grey-700 uppercase font-bold'>Email</label>
          <input id="email" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type='email' placeholder='Dirección de correo electrónico' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label htmlFor="alta" className='block text-grey-700 uppercase font-bold'>Alta</label>
          <input id="alta" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type='date' value={fecha} onChange={(e) => setFecha(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label htmlFor="sintomas" className='block text-grey-700 uppercase font-bold'>Síntomas</label>
          <textarea id="sintomas" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Describe los Síntomas' value={sintoma} onChange={(e) => setSintoma(e.target.value)} />
        </div>

        <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' } />

      </form>
    </div>
  )
}

export default Form
