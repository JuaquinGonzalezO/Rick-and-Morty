import { useCharacter } from "../hooks/useCharacters";
 
 
export const RickandmortyApp = () => {
 
    const {character, imgUrl}   = useCharacter();
    return (
        <>
            {character &&
                character.map((char) => (
 
                   
                    <div key={char.id}>
                            <li> {char.name}</li>
                            <img src={imgUrl(char)} style = {{width: '8rem', display: 'flex'}}/>
 
                 </div>
                  ))}
 
 
        </>
    )
}