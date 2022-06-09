
const updatePlato=async(id,plato)=>{
    const response=await fetch(`http://localhost:8000/api/platos/${id}`,{
        method:"PUT",
        body:JSON.stringify(plato),
        headers:{
            'Content-Type': 'application/json' 
        }
    })

    return await response.json()
}

export default updatePlato