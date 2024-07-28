import axios from 'axios';
import _ from 'lodash';

// Section of plain action objects:
export const loading = () => {
    return {
      type: "LOADING",
    };
  };
  
  export const loadingCompleted = () => {
    return {
      type: "LOADING_COMPLETED",
    };
  };
  
  export const addFetchedSolitaireRingsData = (data) => {
    return {
      type: "ADD_FETCHED_SOLITAIRE_RINGS_DATA",
      data,
    };
  };

  export const addFetchedSolitaireNecklacesData = (data) => {
    return {
      type: "ADD_FETCHED_SOLITAIRE_NECKLACES_DATA",
      data,
    };
  };

  export const addFetchedSolitaireStudsData = (data) => {
    return {
      type: "ADD_FETCHED_SOLITAIRE_STUDS_DATA",
      data
    }
  }

  export const addFetchedFashionRingsData = (data) => {
    return {
      type: "ADD_FETCHED_FASHION_RINGS_DATA",
      data,
    };
  };

  export const addFetchedDiamondPendantsData = (data) => {
    return {
      type: "ADD_FETCHED_DIAMOND_PENDANTS_DATA",
      data,
    };
  };

  export const addFetchedAlphabetPendantsData = (data) => {
    return {
      type: "ADD_FETCHED_ALPHABET_PENDANTS_DATA",
      data,
    };
  };

  export const addFetchedDiamondEarringsData = (data) => {
    return {
      type: "ADD_FETCHED_DIAMOND_EARRINGS_DATA",
      data,
    };
  };

  export const addFetchedNosePinsData = (data) => {
    return {
      type: "ADD_FETCHED_NOSE_PINS_DATA",
      data,
    };
  };

  export const addFetchedMensRingsData = (data) => {
    return {
      type: "ADD_FETCHED_MENS_RINGS_DATA",
      data,
    };
  };

  export const addFetchedMensChainsData = (data) => {
    return {
      type: "ADD_FETCHED_MENS_CHAINS_DATA",
      data,
    };
  };

  export const addFetchedMensKadasData = (data) => {
    return {
      type: 'ADD_FETCHED_MENS_KADAS_DATA',
      data
    } 
  }
  
  export const addFetchedMensBraceletsData = (data) => {
    return {
      type: 'ADD_FETCHED_MENS_BRACELETS_DATA',
      data
    } 
  }

  export const addFetchedGemstonesData = (data) => {
    return {
      type: 'ADD_FETCHED_GEMSTONES_DATA',
      data
    } 
  }

  export const addFetchedGemstonesRingsData = (data) => {
    return {
      type: 'ADD_FETCHED_GEMSTONES_RINGS_DATA',
      data
    } 
  }

  export const addFetchedGemstonesPendantsData = (data) => {
    return {
      type: 'ADD_FETCHED_GEMSTONES_PENDANTS_DATA',
      data
    } 
  }

  export const onError = (error) => {
    return {
      type: "ON_ERROR",
      error,
    };
  };
  
  
  export const addFilteredData = (data) => {
    return {
      type: "ADD_FILTERED_DATA",
      data,
    };
  };


// Action creators

export const fetchJewelryData = (collection) => async (dispatch) => {
    return new Promise((resolve, reject) => {
      callJewelryAPI(collection)
      .then((response) => {
        
        let unfilteredData = response.data;
        
        switch(collection){
          case 'solitaireRings':
            dispatch(addFetchedSolitaireRingsData(unfilteredData));
            break;
          case 'solitaireNecklaces':
            dispatch(addFetchedSolitaireNecklacesData(unfilteredData));
            break;
          case 'solitaireStuds':
            dispatch(addFetchedSolitaireStudsData(unfilteredData));
            break;
          case 'fashionRings':
            dispatch(addFetchedFashionRingsData(unfilteredData));
            break;
          case 'diamondPendants':
            dispatch(addFetchedDiamondPendantsData(unfilteredData));
            break;
          case 'alphabetPendants':
            dispatch(addFetchedAlphabetPendantsData(unfilteredData));
            break;
          case 'diamondEarrings':
            dispatch(addFetchedDiamondEarringsData(unfilteredData));
            break;
          case 'nosePins':
            dispatch(addFetchedNosePinsData(unfilteredData));
            break;
          case 'mensRings':
            dispatch(addFetchedMensRingsData(unfilteredData));
            break;
          case 'mensChains':
            dispatch(addFetchedMensChainsData(unfilteredData));
            break;
          case 'mensKadas':
            dispatch(addFetchedMensKadasData(unfilteredData));
            break;
          case 'mensBracelets':
            dispatch(addFetchedMensBraceletsData(unfilteredData));
            break;
          case 'gemstones':
            dispatch(addFetchedGemstonesData(unfilteredData));
            break;
          case 'gemRings':
            dispatch(addFetchedGemstonesRingsData(unfilteredData));
            break;
          case 'gemPendants':
            dispatch(addFetchedGemstonesPendantsData(unfilteredData));
            break;
          default:
            dispatch(addFetchedSolitaireRingsData(unfilteredData));
            break;
        }
        
        dispatch(loadingCompleted())
        resolve('Everything worked perfect!')
      
      })
      .catch(e => {
        reject('Failed at running api!')
      })
    })
}

const callJewelryAPI = (collection) => {
  return axios.post('/jewelry', {collection})
}

export const findJewelry = (unfilteredData, stockNumber) => {
    return unfilteredData.filter(item => item.stockNumber === stockNumber)[0]
}

export const getFilteredGemRings = (unfilteredData, filter) => {
    let {gem} = filter
    
    let result = unfilteredData

    if (gem === undefined){
      result = result
    }
    else{
      result = result.filter((item, index) => item.gemstone === gem)
    }

    return result
}

export const getSearchQueryFilteredProducts = (productType, listings, filter) => {
  let {priceFrom, priceTo, shape} = filter
  let result = listings

  switch (productType) {
      case 'ring':
          if (shape){
              result = result.filter((item,index)=> item.diamondShape === shape)
          }

          if (priceFrom && priceTo) {
            result = result.filter((item, index)=> parseFloat(item.totalPrice -1 ) >= priceFrom && parseFloat(item.totalPrice + 1) <= priceTo)
          }
          break;
      case 'necklace':
          if (shape){
              result = result.filter((item,index)=> item.diamondShape === shape)
          }

          if (priceFrom && priceTo) {
            result = result.filter((item, index)=> parseFloat(item.totalPrice -1 ) >= priceFrom && parseFloat(item.totalPrice + 1) <= priceTo)
          }
          break;
      case 'stud':
          if (shape){
              result = result.filter((item,index)=> item.diamondShape === shape)
          }

          if (priceFrom && priceTo) {
            result = result.filter((item, index)=> parseFloat(item.totalPrice -1 ) >= priceFrom && parseFloat(item.totalPrice + 1) <= priceTo)
          }
          break;
      case 'mens-ring':
          if (shape){
              result = result.filter((item,index)=> item.diamondShape === shape)
          }
          break;
      default:
          break;
  }
  return result
}
