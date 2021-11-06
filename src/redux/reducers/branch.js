import {BRANCH_LOADED} from "../types";

const initialState = {
    branches: []
}

const branchCode = (state = initialState, {type, payload}) => {
    switch (type) {
        case BRANCH_LOADED:{
            return {
                ...state,
                branches: payload
            }
        }
        default:
            return state

    }
}

export default branchCode