import { 
    RESET_LOADING_SCREEN
} from "../types/loadTypes";

export function resetLoadScreen() {
    return (dispatch) => {
        dispatch(reset())
    }
}

const reset = () => ({
    type: RESET_LOADING_SCREEN,
})