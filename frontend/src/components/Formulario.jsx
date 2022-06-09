import React, { useState } from 'react'
import createPlato from '../helpers/createPlato';
const Formulario = ({ setController }) => {
    const [platoForm, setplatoForm] = useState({
        nombre: "",
        precio: "",
        tipo: "",
        ingredientes: ""
    })

    const handleChange = (e) => setplatoForm({ ...platoForm, [e.target.name]: e.target.value });

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(platoForm.nombre.trim().length===0) {
            alert("No puede enviar campos vacios")
            return
        }
        if(platoForm.precio.trim().length===0) {
            alert("No puede enviar campos vacios")
            return
        }
        if(platoForm.tipo.trim().length===0) {
            alert("No puede enviar campos vacios")
            return
        }
        if(platoForm.ingredientes.trim().length===0) {
            alert("No puede enviar campos vacios")
            return
        }
        createPlato(platoForm)
            .then(res=>{
                setController(true)
                setplatoForm({
                    nombre: "",
                    precio: "",
                    tipo: "",
                    ingredientes: ""
                })
                console.log(res)
            })
            .catch(err=>{
                
                console.log(err)
            })

    }
    return (
        <div className='row '>
            <form onSubmit={handleSubmit} className="form-group" >
                <input
                    className="form-control mb-2"
                    name="nombre"
                    type="text"
                    placeholder="Nombre del plato"
                    onChange={handleChange}
                    value={platoForm.nombre}
                />
                <input
                    className="form-control mb-2"
                    name="precio"
                    type="text"
                    placeholder="Precio del plato"
                    onChange={handleChange}
                    value={platoForm.precio}
                />
                <input
                    className="form-control mb-2"
                    name="tipo"
                    type="text"
                    placeholder="Tipo de plato"
                    onChange={handleChange}
                    value={platoForm.tipo}
                />
                <input
                    className="form-control mb-2"
                    name="ingredientes"
                    type="text"
                    placeholder="Ingredientes principales"
                    onChange={handleChange}
                    value={platoForm.ingredientes}
                />
                <button className='btn btn-primary'>Guardar</button>
            </form>
        </div>
    )
}

export default Formulario