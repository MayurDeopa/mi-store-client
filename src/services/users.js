export const login= async(data)=>{
    const get = await fetch('http://localhost:5000/login',{
        method :"POST",
        headers:{"Content-Type" :"application/json"},
        body:JSON.stringify(data)
    })
    return await get.json()
    

}

export const signUp=async(data)=>{
    
        const res = await fetch("http://localhost:5000/register",{
            method:'POST',
            headers:{"Content-Type" :"application/json"},
            body:JSON.stringify(data)
        })
        return await res.json()
    
}