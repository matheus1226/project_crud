import { useState } from "react"

export default function mudarModo(){
    const [label,setLabel] = useState<boolean>(false);

    function handleClick(){
        setLabel(true);
    }


    return(
        <div>
            {label ? <label>Eu sou legal</label> : <label>Eu sou chato</label>}
            <button onClick={handleClick}>Mudar</button>

        </div>
    )
}