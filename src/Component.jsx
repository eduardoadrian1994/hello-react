import React, { useState } from 'react'
export default function Component() {

const [text, setText] = useState()
const [updated, setUpdated] = useState()

const TextOnChange = (event) => {
    
    setText(event.target.value)

}

const ButtonOnClick = () => {
    
    setUpdated(text)

}

return (
    <div>
    <p>Escriba en el  input la información a guardar con el boton actualizar</p>
    <input type="text" value={text} onChange={TextOnChange} />
    <button onClick={ButtonOnClick}>Actualizar</button>
    <p>Texto input: {text}</p>
    <p>Texto actualizado: {updated}</p>
    </div>
)
}
