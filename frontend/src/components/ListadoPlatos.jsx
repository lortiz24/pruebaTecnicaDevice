import React, { useState } from 'react'
import deletePlato from '../helpers/deletePlato'
import Editar from './Editar'

const ListadoPlatos = ({ listaPlatosDB, setController }) => {
    const [modal, setmodal] = useState(false)
    const [itemEdicion, setitemEdicion] = useState({})
    const handledDelete = (id) => {
        deletePlato(id)
            .then(res => {
                console.log(res)
                setController(true)
            })
    }

    const handledEdit = (item) => {
        setitemEdicion(item)
        setmodal(true)
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col ">Tipo</th>
                        <th scope="col ">Ingredientes</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPlatosDB?.sort((a, b) => a.id - b.id).map((item, index) => (
                        <tr key={index}>
                            <td>{item.nombre}</td>
                            <td>{item.precio}</td>
                            <td>{item.tipo}</td>
                            <td>{item.ingredientes}</td>
                            <td>
                                <button className='btn btn-warning m-lg-2' onClick={()=>handledEdit(item)}>Editar</button>
                                <button className='btn btn-danger ' onClick={() => handledDelete(item.id)}>Eliminar</button>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {modal && (<Editar setmodal={setmodal} itemEdicion={itemEdicion} setController={setController}/>)}
        </div>
    )
}

export default ListadoPlatos