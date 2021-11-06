import {PRODUCT_LOADED} from "../types";

const initialState = {
    product: []
}

export const product = (state = initialState, {type, payload}) => {
    switch (type) {
        case PRODUCT_LOADED:
            return {
                ...state,
                product: payload
            }
        default:
            return state;
    }
}