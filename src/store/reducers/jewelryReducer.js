const initialState = {
    unfilteredSolitaireRingsArray: [],
    filteredSolitaireRingsArray: [],
    unfilteredSolitaireNecklacesArray: [],
    filteredSolitaireNecklacesArray: [],
    unfilteredSolitaireNecklacesArray: [],
    filteredSolitaireNecklacesArray: [],
    unfilteredSolitaireStudsArray: [],
    filteredSolitaireStudsArray: [],
    unfilteredFashionRingsArray: [],
    filteredFashionRingsArray: [],
    unfilteredDiamondPendantsArray: [],
    filteredDiamondPendantsArray: [],
    unfilteredAlphabetPendantsArray: [],
    filteredAlphabetPendantsArray: [],
    unfilteredDiamondEarringsArray: [],
    filteredDiamondEarringsArray: [],
    unfilteredNosePinsArray: [],
    filteredNosePinsArray: [],
    unfilteredMensChainsArray: [],
    filteredMensChainsArray: [],
    unfilteredMensKadasArray: [],
    filteredMensKadasArray: [],
    unfilteredMensBraceletsArray: [],
    filteredMensBraceletsArray: [],
    unfilteredMensStudsArray: [],
    filteredMensStudsArray: [],
    unfilteredMensRingsArray: [],
    filteredMensRingsArray: [],
    unfilteredGemstonesArray: [],
    filteredGemstonesArray: [],
    unfilteredGemstonesRingsArray: [],
    filteredGemstonesRingsArray: [],
    unfilteredGemstonesPendantsArray: [],
    filteredGemstonesPendantsArray: [],
    isLoading: true,
    error: null
}

const jewelryReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOADING":
            return {...state, isLoading: true}
           
        case "LOADING_COMPLETED":
            return {...state, isLoading: false}
           
        case "ADD_FETCHED_SOLITAIRE_RINGS_DATA":
            return {...state, unfilteredSolitaireRingsArray: action.data}
           
        case "ADD_FETCHED_SOLITAIRE_NECKLACES_DATA":
            return {...state, unfilteredSolitaireNecklacesArray: action.data}
           
        case "ADD_FETCHED_SOLITAIRE_STUDS_DATA":
            return {...state, unfilteredSolitaireStudsArray: action.data}
           
        case "ADD_FETCHED_FASHION_RINGS_DATA":
            return {...state, unfilteredFashionRingsArray: action.data}
           
        case "ADD_FETCHED_DIAMOND_PENDANTS_DATA":
            return {...state, unfilteredDiamondPendantsArray: action.data}
           
        case "ADD_FETCHED_ALPHABET_PENDANTS_DATA":
            return {...state, unfilteredAlphabetPendantsArray: action.data}
           
        case "ADD_FETCHED_DIAMOND_EARRINGS_DATA":
            return {...state, unfilteredDiamondEarringsArray: action.data}
           
        case "ADD_FETCHED_NOSE_PINS_DATA":
            return {...state, unfilteredNosePinsArray: action.data}
           
        case "ADD_FETCHED_MENS_RINGS_DATA":
            return {...state, unfilteredMensRingsArray: action.data}
           
        case "ADD_FETCHED_MENS_CHAINS_DATA":
            return {...state, unfilteredMensChainsArray: action.data}
           
        case "ADD_FETCHED_MENS_KADAS_DATA":
            return {...state, unfilteredMensKadasArray: action.data}
           
        case "ADD_FETCHED_MENS_BRACELETS_DATA":
            return {...state, unfilteredMensBraceletsArray: action.data}
           
        case "ADD_FETCHED_GEMSTONES_DATA":
            return {...state, unfilteredGemstonesArray: action.data}
           
        case "ADD_FETCHED_GEMSTONES_RINGS_DATA":
            return {...state, unfilteredGemstonesRingsArray: action.data}
           
        case "ADD_FETCHED_GEMSTONES_PENDANTS_DATA":
            return {...state, unfilteredGemstonesPendantsArray: action.data}
           
        case "ON_ERROR":
            return {...state, error: action.msg}
           
        case "ADD_FILTERED_DATA":
            return {
                ...state,
                filteredSolitaireRingsArray: action.data
            }
           
        default:
            return state

    }
}

export default jewelryReducer