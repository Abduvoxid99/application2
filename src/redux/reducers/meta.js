import {APPLICATION_LOADED, ERROR_RECEIVED} from "../types"

const defaultState = {
    loading: true,
    error: false,
}

const reducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case APPLICATION_LOADED:
            return {
                ...state,
                loading: false
            }
        case ERROR_RECEIVED:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}

export default reducer
