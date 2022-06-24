import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getCountries , FilterCountriesByContinent, filterActivities, getActivities} from '../actions/index';
import {Link} from 'react-router-dom'
import Card from './Card';
import Paginado from './Paginado';
import SearchBar from './SearchBar';
import './home.css'

export default function Home(){

    const dispatch = useDispatch()

    const allCountries = useSelector ((state) => state.countries)
    const activities = useSelector((state)=> state.activities)

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesByPage, setCountryByPage] = useState(9)
    const indexOfLastCountry = currentPage * countriesByPage
    const indexOfFirstCountry = indexOfLastCountry - countriesByPage
    const currentCountries = allCountries?.slice(indexOfFirstCountry, indexOfLastCountry)

    const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
    pageNumber >= 2 ? setCountryByPage(10) : setCountryByPage(9);
    }
    useEffect (()=> {
        dispatch(getCountries('?page=all'))
        dispatch(getActivities())
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries('?page=all'))
    }

    function handleFilterContinents(e){
        dispatch(FilterCountriesByContinent(e.target.value))
        setCurrentPage(1);
    }

    function handleFilterAtoZ(e){
        dispatch(getCountries(`?${(e.target.value)}`))
        setCurrentPage(1);
    }

    function handleFilterpobAsc(e){
        dispatch(getCountries(`?${(e.target.value)}`))
        setCurrentPage(1);
    }

    function handleFilterActivity(e){
        dispatch(filterActivities(e.target.value))
        setCurrentPage(1);
    }

    return(
        <div>
            <h2 className='font'>Paises Henry</h2>
            
            <button className='button' onClick={e=>{handleClick(e)}}>
                Get all countries back
            </button>
            <Link to= '/activity'><button>Crear Actividad</button></Link>
            
            <div>
        <div className='filterContainer'>
                <label className='font'>Alfabetico</label>
                <select className='filterAndOrder' onChange={e => handleFilterAtoZ(e)}>
                    <option value='page=all'>Ordenar</option>
                    <option value='sort=AtoZ'>Ascendente</option>
                    <option value='sort=ZtoA'>Descendente</option>
                </select>
                <label className='font'>Poblacion</label>
                <select className='filterAndOrder' onChange={e => handleFilterpobAsc(e)}>
                    <option value='page=all'>Ordenar</option>
                    <option value='sort=pobAsc'>Ascendente</option>
                    <option value='sort=pobDes'>Descendente</option>
                </select>
                <label className='font'>Continente</label>
                <select className='filterAndOrder' onChange={e => handleFilterContinents(e)}>
                    <option value= 'all'>Ordenar</option>
                    <option value= 'Americas'>America</option>
                    <option value= 'Europe'>Europa</option>
                    <option value= 'Africa'>Africa</option>
                    <option value= 'Asia'>Asia</option>
                    <option value= 'Oceania'>Oceania</option>
                </select> 

            
            <label className='font'>Actividad</label>
                <select className='filterAndOrder' onChange={e => handleFilterActivity(e)}>
                    <option>Actividad</option>
                    {activities?.map((act)=> (
                        <option value = {act.name}>{act.name}</option>
                    ))}
                </select>
            
        </div>

                <Paginado
                countriesByPage={countriesByPage}
                allCountries={allCountries.length}
                paginado={paginado} 
                />

                <SearchBar/>

            <div className='cardsBox'>
                {currentCountries?.map( e=> {
                        return(
                    <div key={e.ccid}>
                    <Link to={'/home/'+e.ccid}>
                        <Card 
                        name = {e.name}
                        key = {e.ccid}
                        flags = {e.flags}
                        capital = {e.capital}
                        continents = {e.continents}
                        population = {e.population}/>
                    </Link>
                        </div>
                        );
                })}
            </div>
        </div>

    </div>
    )
}