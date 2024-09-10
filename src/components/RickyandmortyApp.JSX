const api_url = `https://rickandmortyapi.com/api/character`
 
export const reqCharacter = async()=>{
    const resp = await fetch(api_url)
    const data = await resp.json()
    console.log(data);

    return data
 
    }
    reqCharacter()
    
 
   