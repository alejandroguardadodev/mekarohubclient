import { 
    START_LOADING_SCREEN,
    END_LOADING_SCREEN,
    END_LOADING_SCREEN_WITH_MESSAGE
} from "../types/loadTypes";

export const startLoadingScreen = () => ({
    type: START_LOADING_SCREEN,
})

export const endLoadingScreen = () => ({
    type: END_LOADING_SCREEN,
})

export const endLoadingScreenWithMessage = (msg) => ({
    type: END_LOADING_SCREEN_WITH_MESSAGE,
    payload: {
        msg,
        type: "success"
    }
})