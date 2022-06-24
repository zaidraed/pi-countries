import React from "react"
import './card.css'

export default function Card({name, id, flags, continents}) {
    return (
    <div className= 'card' >
        <h3 className=".card .blob">{name}</h3>
        <img className="cardImg" src={flags} alt='Imagen no encontrada'/>
        
        <h5>Continente: {continents}</h5>
        
    </div>
    )
};