import React, { useState } from 'react'

const Formulario = ({ setPlato }) => {
    const [platoForm, setplatoForm] = useState({
        nombre: "",
        precio: "",
        tipo: "",
        ingredientes: ""
    })

    const handleChange = (e) => setplatoForm({ ...platoForm, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
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
        setPlato(platoForm)

    }
    return (
        <div className='row col-5'>
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