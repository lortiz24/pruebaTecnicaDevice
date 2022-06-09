

const createPlato=async(plato)=>{
    const response=await fetch("http://localhost:8000/api/platos/",{
        method:"POST",
        body:JSON.stringify(plato),
        headers:{
            'Content-Type': 'application/json' 
        }
    })

    return await response.json()
}

export default createPlato