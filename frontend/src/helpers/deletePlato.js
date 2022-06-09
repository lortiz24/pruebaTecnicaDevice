const deletePlato=async(id)=>{
    const response=await fetch(`http://localhost:8000/api/platos/${id}`,{
        method:"DELETE"
    })

    return await response.json()
}

export default deletePlato