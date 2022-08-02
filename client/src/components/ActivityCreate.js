import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {postActivities , getCountries} from '../actions/index'
import { useDispatch, useSelector } from "react-redux";
import './ActivityCreate.css'

    export default function ActionCreate(){
        const dispatch = useDispatch()
        const countries = useSelector((state) => state.countries)
        const [input, setInput] = useState({
            name: "",
            dificulty: "",
            duration: "",
            season: "",
            ccid: []
        })

    useEffect(()=>{
        dispatch(getCountries('?page=all'))
    }, [dispatch]);

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        }
    
    function handleDelete(i) {
        setInput({
            ...input,
            ccid: input.ccid.filter((el) => el !== i),
        });
    }
    
    function handleSelect(e) {
        setInput({ ...input, ccid: [...input.ccid, e.target.value] });
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        if (input.name === "" ||
        input.duration === "" ||
        input.dificulty === "" ||
        input.season === "" ||
        input.ccid.length === 0) return alert('Debe llenar los campos');
        dispatch(postActivities(input));
        alert("Actividad Creada");
        setInput({
            name: "",
            duration: "",
            dificulty: "",
            season: "",
            ccid: [],
        });
    }
    


        return(
                <div className="activityCardContainer">
                <div className="activityCard">
                    <h1>Crear Una Actividad</h1>
                    <form onSubmit={handleSubmit}>

                        <span> Crea una Actividad </span>
                    <div>
                        <label></label>
                            <input className="i"
                                type= "text"
                                placeholder="Escriba la Actividad..."
                                value= {input.name}
                                name= 'name'
                                onChange={handleChange }
                            />
                        </div>

                        <div>
                        <label>Duracion</label>
                            <input className="i"
                                type="number" min="1" max="365"
                                value={input.duration}
                                name="duration"
                                placeholder="Coloque la Duracion..."
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>Dificultad</label>
                            <input className="i"
                                type="number"
                                name="dificulty"
                                min="1"
                                max="5"
                                value={input.dificulty}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>

                            <div>
                            <select
                                name="season"
                                value={input.season}
                                onChange={(e) => handleChange(e)}>
                                <option> Temporada </option>
                                <option value="Winter">Invierno</option>
                                <option value="Autumn">Verano</option>
                                <option value="Spring">Otoño</option>
                                <option value="Summer">Primavera</option>
                            </select>
                        </div>

                        <div>
                            <select  onChange={(e) => handleSelect(e)}>
                                <option> Paises </option>
                                    {countries.map((v) => (
                                <option value={v.ccid}>{v.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            {input.ccid.map((country) => (
                            <div>
                                <input className="i" type='button' value='X' onClick={() => handleDelete(country)}/>
                                <p>{country}</p>
                            </div>
                            ))}
                        </div>

                        <div>
                            <button type="submit">Crear Actividad</button>
                        </div>
                        <Link to= '/home'><button>Volver</button></Link>
                    </form>
                    </div>
                </div>
        )
        
    }