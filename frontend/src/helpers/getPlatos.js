const getPlatos= async()=>{
    const data=await fetch("http://localhost:8000/api/platos/");
    const {platos}=await data.json()
    return platos
}

export default getPlatos