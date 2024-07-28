export const addToWishlist = payload => {
    return {
        type: 'ADD_TO_WISHLIST', 
        payload
    }
}

export const removeFromWishlist = payload => {
    return {
        type: 'REMOVE_FROM_WISHLIST',
        payload
    }
}