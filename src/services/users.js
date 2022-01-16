export const login= async(data)=>{
    try{
        const get = await fetch('https://mi-store-server.herokuapp.com/login',{
        method :"POST",
        headers:{"Content-Type" :"application/json"},
        body:JSON.stringify(data)
    })
    return await get.json()
    }catch(error){
        return error
    }
    

}

export const signUp=async(data)=>{
    
    try{
        const res = await fetch("https://mi-store-server.herokuapp.com/register",{
            method:'POST',
            headers:{"Content-Type" :"application/json"},
            body:JSON.stringify(data)
        })
        return await res.json()
    }catch(error){
        return error
    }
    
}