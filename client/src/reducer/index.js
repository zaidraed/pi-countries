
const initialState = {
    countries : [],
    allCountries: [],
    activities : [],
    detail : []
}



function rootReducer (state = initialState, action){
    switch(action.type){
        case 'GET_COUNTRIES':
            return{
                ...state,
                countries:action.payload,
                allCountries: action.payload
            }

        case 'GET_COUNTRY_BY_NAME':
            return{
                ...state,
                countries: action.payload
            }

        case 'POST_ACTIVITIES':
            return{
                ...state,
            
            }

        case 'GET_ACTIVITIES':
            return{
                ...state,
                activities:action.payload
            }

        case 'GET_DETAIL':
            return{
                ...state,
                detail: action.payload
            }

        case 'FILTER_BY_CONTINENT':
        const allCountries = state.allCountries
        const continentFiltered = action.payload === 'all' ? allCountries : allCountries.filter(e => e.continents === action.payload)
        return {
                ...state,
                countries: continentFiltered
            }

        case 'FILTER_BY_ACTIVITY':
            return {
                ...state,
                countries: action.payload
            }



        default:
            return state;
    }
}

export default rootReducer; 