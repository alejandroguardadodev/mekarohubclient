import { 
    START_LOADING_SCREEN,
    END_LOADING_SCREEN,
    END_LOADING_SCREEN_WITH_MESSAGE,
    RESET_LOADING_SCREEN,
 } from "./types/loadTypes";

const initialState = {
    isLoad: false,
    message: {}
}

export default function(state = initialState, action) {
    const { type } = action

    switch (type) {
        case START_LOADING_SCREEN:
            return {
                ...state,
                isLoad: true
            };
    
        case END_LOADING_SCREEN:
            return {
                ...state,
                isLoad: false,
                message: {}
            }

        case END_LOADING_SCREEN_WITH_MESSAGE:
            const message = action.payload

            return {
                ...state,
                message,
                isLoad: false
            }

        case RESET_LOADING_SCREEN:
            return {
                ...state,
                isLoad: false,
                message: {}
            }
            
        default:
            return state;
    }
}