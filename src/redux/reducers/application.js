import {APPLICATION_UPDATED, BRANCH_CODE, INITIALIZE_APPLICATION, IS_COMPLETE} from "../types"

const initialState = {
    milestone: null,
    id: "",
    token: "",
    isToken: false,
    branch_code: null
}

export const application = (state = initialState, {type, payload}) => {
    switch (type) {
        case INITIALIZE_APPLICATION:
            return {
                ...state,
                id: payload.id,
                milestone: payload.milestone,
                branch_code: payload.branch_code
            }
        case APPLICATION_UPDATED:
            return {
                ...state,
                milestone: payload
            }
        case BRANCH_CODE:
            return {
                ...state,
                branch_code: payload
            }
        case IS_COMPLETE:
            return {
                ...state,
                token: payload,
                isToken: true
            }
        default:
            return state;
    }
}