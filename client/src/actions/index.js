import axios from 'axios';

export function getCountries(route){
    return async function(dispatch){
        let json = await axios.get(`http://localhost:3001/api/country${route}`)
        return dispatch({
            type: 'GET_COUNTRIES' ,
            payload: json.data
        })
    }
}
export function getCountriesByName(name){
    return async function(dispatch){
        try{
            let json = await axios.get(`http://localhost:3001/api/country?name=${name}`)
            return dispatch({
                type: 'GET_COUNTRY_BY_NAME',
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}
export function getDetail(id){
    return async function(dispatch){
        try{
            let json = await axios.get(`http://localhost:3001/api/country/${id}`)
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}

export function postActivities(payload){
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/api/activity',payload)
        console.log(response)
        return response;
    }
}

export function FilterCountriesByContinent(payload){
    return{
        type: 'FILTER_BY_CONTINENT',
        payload
    }
}