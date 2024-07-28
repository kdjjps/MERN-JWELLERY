const Storage = (wishlistItems) => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems.length > 0 ? wishlistItems : []));
}

const sumItems = wishlistItems => {
    Storage(wishlistItems);
    let wishlistItemCount = wishlistItems.reduce((total, product) => total + product.quantity, 0);
    return { wishlistItemCount }
}

const storage = window.localStorage.getItem("wishlist")
  ? JSON.parse(window.localStorage.getItem("wishlist"))
  : [];
  

const initialState = {
    wishlistItems: storage,
    ...sumItems(storage)
}

const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_WISHLIST':
            if (!state.wishlistItems.find(item => item.stockNumber === action.payload.stockNumber)) {
                state.wishlistItems.push({
                    stockNumber: action.payload.stockNumber,
                    itemType: action.payload.itemType
                })
            } 
            else {
                let listItem = state.wishlistItems.find((item, index) => item.stockNumber === action.payload.stockNumber )
                let indexOfElement = state.wishlistItems.indexOf(listItem)
                state.wishlistItems.splice(indexOfElement, 1)
            }
            return {
                ...state,
                ...sumItems(state.wishlistItems),
                wishlistItems: [...state.wishlistItems]
            }
            break;
        case 'REMOVE_FROM_WISHLIST':
                let listItem = state.wishlistItems.find((item, index) => item.stockNumber === action.payload.stockNumber )
                let indexOfElement = state.wishlistItems.indexOf(listItem)
                state.wishlistItems.splice(indexOfElement, 1)
            return {
                ...state,
                ...sumItems(state.wishlistItems),
                wishlistItems: [...state.wishlistItems]
            }
            break;
        default:
            return state

    }
}

export default wishlistReducer