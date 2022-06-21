import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getCountries , FilterCountriesByContinent} from '../actions/index';
import {Link} from 'react-router-dom'
import Card from './Card';
import Paginado from './Paginado';
import SearchBar from './SearchBar';

export default function Home(){

    const dispatch = useDispatch()

    const allCountries = useSelector ((state) => state.countries)

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesByPage, setCountryByPage] = useState(9)
    const indexOfLastCountry = currentPage * countriesByPage
    const indexOfFirstCountry = indexOfLastCountry - countriesByPage
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)

    const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
    pageNumber >= 2 ? setCountryByPage(10) : setCountryByPage(9);
    }
    useEffect (()=> {
        dispatch(getCountries('?page=all'))
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

    return(
        <div>
            <Link to = '/counry'><h1> Counties Rules</h1></Link> 
            
            <button onClick={e=>{handleClick(e)}}>
                Get all countries back
            </button>
            <div>
                <select onChange={e => handleFilterAtoZ(e)}>
                    <option value='page=all'>Ordenar</option>
                    <option value='sort=AtoZ'>Ascendente</option>
                    <option value='sort=ZtoA'>Descendente</option>
                </select>

                <select onChange={e => handleFilterpobAsc(e)}>
                    <option value='page=all'>Ordenar</option>
                    <option value='sort=pobAsc'>Ascendente</option>
                    <option value='sort=pobDes'>Descendente</option>
                </select>

                <select onChange={e => handleFilterContinents(e)}>
                    <option value= 'all'>Continente</option>
                    <option value= 'Americas'>America</option>
                    <option value= 'Europe'>Europa</option>
                    <option value= 'Africa'>Africa</option>
                    <option value= 'Asia'>Asia</option>
                    <option value= 'Oceania'>Oceania</option>
                </select> 

                <Paginado
                countriesByPage={countriesByPage}
                allCountries={allCountries.length}
                paginado={paginado} 
                />

                <SearchBar/>

                {currentCountries?.map( e=> {
                        return(
                    <div className = 'tarjetas' key={e.id}>
                    <Link to={'/home/'+e.id}>
                        <Card 
                        name = {e.name}
                        key = {e.id}
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
    )
}