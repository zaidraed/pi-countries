
const initialState = {
    countries : [],
    allCountries: []
}



function rootReducer (state = initialState, action){
    switch(action.type){
        case 'GET_COUNTRIES':
            return{
                ...state,
                countries:action.payload,
                allCountries: action.payload
            }

        case 'FILTER_BY_CONTINENT':
        const allCountries = state.allCountries
        const continentFiltered = action.payload === 'all' ? allCountries : allCountries.filter(e => e.continents === action.payload)
        return {
                ...state,
                countries: continentFiltered
            }

        default:
            return state;
    }
}

export default rootReducer; 