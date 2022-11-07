const Paciente = () => {
    return (
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {""}
                <span className='font-normal normal-case'>Inozuke</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {""}
                <span className='font-normal normal-case'>Agustín</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {""}
                <span className='font-normal normal-case'>correo@correo.es</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {""}
                <span className='font-normal normal-case'>07/11/2022</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {""}
                <span className='font-normal normal-case'>Vómitos</span>
            </p>
        </div>
    )
}

export default Paciente