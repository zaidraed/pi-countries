import axios from 'axios';

export function getCountries(route){
    return async function(dispatch){
        let json = await axios.get(`http://localhost:3001/api/country${route}`,{})
        return dispatch({
            type: 'GET_COUNTRIES' ,
            payload: json.data,
        })
    }
}

export function FilterCountriesByContinent(payload){
    return{
        type: 'FILTER_BY_CONTINENT',
        payload
    }
}