import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../actions";

export default function Detail(props){
    console.log(props)
    
    const dispatch = useDispatch() 
    
    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[dispatch, props.match.params.id])

    const countries = useSelector((state)=> state.detail)

return (
<div key={countries.ccid}>
    {
        <div>
        <Link to= '/home'><button>Volver</button></Link>
            <h1>Pais {countries.name}</h1>
            <img src={countries.flags} alt='Imagen no encontrada' width='250px' height='175px'></img>
            <h2>Capital: {countries.capital}</h2>
            <p>Continente: {countries.continents}</p>
            <p>Region: {countries.subregion}</p>
            <p>Area: {countries.area}km2</p>
            <p>Poblacion: {countries.population}</p>

            <h2>Activities:</h2>
                <p>
                    {countries.Activities&&countries.Activities.length ?
                        countries.Activities.map(a=>
                    <li> Nombre: <span>{a.name} </span>      
                        <p>Duracion: <span>{a.duration}</span>  Days  </p>   
                        <p>Dificultad: <span>{a.dificulty}</span> </p>   
                        <p>Temporada: <span>{a.season}</span></p> 
                        
                    </li>) 
                    : <span>No activities yet</span>}   
                </p>



        </div>
    }
</div>





)



}