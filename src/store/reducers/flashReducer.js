const initialState = {
    status: false,
    message: ''
}

const flashReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_FLASH':
            return {...state, status: true, message: action.message}
        case 'VANISH_FLASH':
            return {...state, status: false}
        case 'REMOVE_MESSAGE':
            return {...state, message: ''}
        default:
            return state;
    }
}

export default flashReducer