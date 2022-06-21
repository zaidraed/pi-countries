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
// export function getActivities(activity){
//     return async function(dispatch){
//     let info = await axios.get(`http://localhost:3001/api/country?page=all`)
//     info.data = info.data.filter(data => data.Activities.filter(e=> e.name === activity).lenth)
//     return dispatch({
//         type: 'GET_ACTIVITIES',
//         payload: info.data
//     })
// }}

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