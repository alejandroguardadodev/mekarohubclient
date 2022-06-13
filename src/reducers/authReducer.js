import { 
    LOAD_AUTH_SUCCESS,
    LOAD_AUTH_ERROR
} from "./types/authTypes";

const initialState = {
    user: {},
    isAuth: false
}

export default function(state = initialState, action) {
    const { type } = action

    switch (type) {
        case LOAD_AUTH_SUCCESS:
            const user = action.payload
            
            return {
                ...state,
                user,
                isAuth: true
            };
    
        case LOAD_AUTH_ERROR:
            return {
                ...state,
                isAuth: false
            }
            
        default:
            return state;
    }
}