import React from "react"


export default function Card({name, id, flags, continents}) {
    return (
    <div>
        <h3>{name}</h3>
        <img src={flags} alt='Imagen no encontrada'/>
        
        <h5 >Continente: {continents}</h5>
        
    </div>
    )
};