import {batch} from "react-redux"
import api from "../api"

import {
    APPLICATION_LOADED,
    APPLICATION_UPDATED, BRANCH_LOADED,
    ERROR_RECEIVED, INITIALIZE_APPLICATION, IS_COMPLETE,
    PRODUCT_LOADED
} from "../types"

export const getProduct = () => dispatch => {
    api.getProduct()
        .then((res) => {
            const {application, branches, product} = res.data.data
            batch(() => {
                dispatch({type: BRANCH_LOADED, payload: branches})
                dispatch({type: PRODUCT_LOADED, payload: product.product_items})
                dispatch({type: INITIALIZE_APPLICATION, payload: application})
                dispatch({type: APPLICATION_LOADED})
            })
        }).catch((err) => {
            dispatch({type: ERROR_RECEIVED, payload: err})
        })
}

export const postComplete = (params) => dispatch => {
    return api.complete(params)
        .then((res) => {
            dispatch({type: APPLICATION_LOADED})
            dispatch({type: APPLICATION_UPDATED, payload: 10})
            dispatch({type: IS_COMPLETE, payload: res.data.data.ctoken})
        })
        .catch(err => {
            dispatch({type: ERROR_RECEIVED, payload: err})
        })
}
