import {combineReducers} from "redux"
import meta from "./meta"
import {product} from "./product"
import {application} from "./application"
import branch from "./branch"

export const rootReducer = combineReducers({
    meta,
    application,
    product,
    branch,
})