import React, { useState,useEffect   } from 'react'
import Formulario from './Formulario'
import getPlatos from "../helpers/getPlatos"
import ListadoPlatos from './ListadoPlatos'
const AppComponent = () => {
    
    const [controller, setController] = useState(false)
    const [listaPlatosDB, setListaPlatosDB] = useState([])
    useEffect(() => {
        console.log("effect")
        getPlatos()
            .then(platos=>{
                setListaPlatosDB(platos)
                console.log(platos)
            })
            .catch(err=>console.log(err))
        setController(false)
      }, [controller])


    return (
        <div className='container'>
            <h1 className='text-center mt-3'>FrontEnd </h1>
            <hr />
            <Formulario setController={setController}/>
            <ListadoPlatos listaPlatosDB={listaPlatosDB} setController={setController}/>
        </div>
    )
}

export default AppComponent