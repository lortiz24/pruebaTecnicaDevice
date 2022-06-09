import React, { useState } from 'react'
import updatePlato from "../helpers/updatePlato"
const Editar = ({ setmodal, itemEdicion, setController }) => {
    
    const [platoForm, setplatoForm] = useState(itemEdicion)

    const handledChange = (e) => setplatoForm({ ...platoForm, [e.target.name]: e.target.value });


    const cerrarModal = () => {
        setmodal(false);
    };

    const handledSubmit = async(e) => {
        e.preventDefault()
        if(platoForm.nombre.trim().length===0) {
            alert("No puede enviar campos vacios")
            return
        }
        if(platoForm.precio.length===0) {
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
        
        updatePlato(itemEdicion.id,platoForm)
            .then(res=>{
                console.log(res)
                setController(true);
                cerrarModal()
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <>
            <div className="modal" tabIndex="-1" style={{ display: "block" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Editar Busqueda: <strong>{itemEdicion.nombre}</strong>
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => cerrarModal()}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handledSubmit}>
                                <div className="form-group">
                                    <label htmlFor="valorBusqueda">Valor de la busqueda</label>
                                    <input
                                        className="form-control mb-2"
                                        name="nombre"
                                        type="text"
                                        placeholder="Nombre del plato"
                                        onChange={handledChange}
                                        value={platoForm.nombre}
                                    />
                                    <input
                                        className="form-control mb-2"
                                        name="precio"
                                        type="text"
                                        placeholder="Precio del plato"
                                        onChange={handledChange}
                                        value={platoForm.precio}
                                    />
                                    <input
                                        className="form-control mb-2"
                                        name="tipo"
                                        type="text"
                                        placeholder="Tipo de plato"
                                        onChange={handledChange}
                                        value={platoForm.tipo}
                                    />
                                    <input
                                        className="form-control mb-2"
                                        name="ingredientes"
                                        type="text"
                                        placeholder="Ingredientes principales"
                                        onChange={handledChange}
                                        value={platoForm.ingredientes}
                                    />
                                </div>
                                <button type="submit" className="btn btn-success col-3 m-2 ">
                                    Guardar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Editar