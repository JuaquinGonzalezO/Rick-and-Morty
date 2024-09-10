import { useState } from "react";
import { useEffect } from "react";
import { reqCharacter } from "../services/characters";
import { reqBuscar } from "../services/characters";
 
export const useCharacter = () =>{
 
    const [character, setCharacter]  = useState([])

    useEffect(()=>{
        reqCharacter().then((data)=>{
            setCharacter(data.results)
        }) 
    }, [])
 
    const imgUrl = (char) =>{
        const imagePath  = char.image
        return imagePath
    }
 
    const handleGetBuscar = (e, nombre) => {
        e.preventDefault()
        reqBuscar(nombre).then((nombreCharacter)=>{
 
 
        })
    }   
    return {
        character,
        imgUrl
    }
 
 
 
 
 
 
}
 