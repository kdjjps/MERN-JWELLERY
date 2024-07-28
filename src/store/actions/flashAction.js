export const showFlash = (message) => {
    return {
        type: 'SHOW_FLASH',
        message
    }
}

export const vanishFlash = () => {
    return {
        type: 'VANISH_FLASH'
    }
}

export const removeMessage = () => {
    return {
        type: 'REMOVE_MESSAGE'
    }
}

export const letsShowFlash = (message) => (dispatch) => {
    dispatch(showFlash(message))
    setTimeout(() => dispatch(vanishFlash()), 2000)
    setTimeout(() => dispatch(removeMessage()), 2500)
  }   