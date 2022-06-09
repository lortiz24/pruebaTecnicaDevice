import React, { useState } from 'react'
import Formulario from './Formulario'
const AppComponent = () => {
    const [plato, setPlato] = useState({

    })
    return (
        <div className='container'>
            <h1 className='text-center mt-3'>FrontEnd </h1>
            <Formulario setPlato={setPlato} />
        </div>
    )
}

export default AppComponent