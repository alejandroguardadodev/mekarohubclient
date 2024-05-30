import { 
    LOAD_AUTH_SUCCESS,
    LOAD_AUTH_ERROR,
    LOGOUT
 } from "../types/authTypes";

 import { 
    START_LOADING_SCREEN,
    END_LOADING_SCREEN,
    END_LOADING_SCREEN_WITH_MESSAGE
} from "../types/loadTypes";

import axiosClient, {generateConfig} from "../../config/axiosClient";

export function loadAuth(showMessage, onAuth) {
    return async (dispatch) => {
        dispatch(startLoadingScreen())
        
        try {
            let token = localStorage.getItem('token');

            if (!token) {
                dispatch(endLoadingScreen())
                throw 'Data not valid';
            }

            const config = generateConfig(token)
            
            const { data } = await axiosClient.get('/users/profile', config)

            if (data._id) {
                if (showMessage) dispatch(endLoadingScreenWithMessage("Welcome Back!"))
                else dispatch(endLoadingScreen())

                dispatch(loadSuccess(data))

                onAuth(true)
                
            } else throw 'Data not valid';
        } catch (err) {
            dispatch(endLoadingScreen())
            dispatch(loadErr())
            onAuth(false)
        }
    }
}

const startLoadingScreen = () => ({
    type: START_LOADING_SCREEN,
})

const endLoadingScreen = () => ({
    type: END_LOADING_SCREEN,
})

const endLoadingScreenWithMessage = (msg) => ({
    type: END_LOADING_SCREEN_WITH_MESSAGE,
    payload: {
        msg,
        type: "success"
    }
})

const loadSuccess = data => ({
    type: LOAD_AUTH_SUCCESS,
    payload: data
})

const loadErr = () => ({
    type: LOAD_AUTH_ERROR
})

// LOGOUT
export function logout() {
    return (dispatch) => {
        dispatch(sendLogOut())
        localStorage.removeItem('token');
    }
}

const sendLogOut = () => ({
    type: LOGOUT
})