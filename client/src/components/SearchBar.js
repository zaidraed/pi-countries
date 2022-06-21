import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../actions";

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name,setName] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        if (name.length === 0) return alert('Debe colocar un Pais');
        dispatch(getCountriesByName(name))
        setName("")
    }
    function handleImputChange(e){
        e.preventDefault();
        setName(e.target.value)
        console.log(name)
    }

    return(
        <div>
       <form  onSubmit={handleSubmit}>
            <input type="text" placeholder='Buscar pais...' onChange={handleImputChange} value={name} />
            <input type="submit" value="Buscar" />
        </form>
        </div>
    )
}