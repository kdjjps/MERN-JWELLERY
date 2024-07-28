const initialState = {
    loadingDone: false
}

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
       
      case "LOADING_COMPLETED":
        return { ...state, loadingDone: true };
       
      default:
        return state;
    }
  };
  
  export default loadingReducer;