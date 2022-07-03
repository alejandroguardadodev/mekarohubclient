import { combineReducers } from "redux"
import authReducer from "./authReducer"
import loadReducer from "./loadReducer"
import conceptReducer from "./conceptReducer"
import rightbarReducer from "./rightbarReducer"

export default combineReducers({
    auth: authReducer,
    load: loadReducer,
    concepts: conceptReducer,
    rightbar: rightbarReducer
})