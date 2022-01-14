export const login= async(data)=>{
    const get = await fetch('https://mi-store-server.herokuapp.com/login',{
        method :"POST",
        headers:{"Content-Type" :"application/json"},
        body:JSON.stringify(data)
    })
    return await get.json()
    

}

export const signUp=async(data)=>{
    
        const res = await fetch("https://mi-store-server.herokuapp.com/register",{
            method:'POST',
            headers:{"Content-Type" :"application/json"},
            body:JSON.stringify(data)
        })
        return await res.json()
    
}