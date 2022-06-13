import { 
    LOAD_AUTH_SUCCESS,
    LOAD_AUTH_ERROR
 } from "../types/authTypes";

 import { 
    START_LOADING_SCREEN,
    END_LOADING_SCREEN,
    END_LOADING_SCREEN_WITH_MESSAGE
} from "../types/loadTypes";

import axiosClient, {generateConfig} from "../../config/axiosClient";

export function loadAuth(showMessage) {
    return async (dispatch) => {
        dispatch(startLoadingScreen())

        try {
            let token = localStorage.getItem('token');

            if (!token) return dispatch(endLoadingScreen())

            const config = generateConfig(token)
            
            const { data } = await axiosClient.get('/users/profile', config)

            if (data._id) {
                if (showMessage) dispatch(endLoadingScreenWithMessage("Welcome Back!"))
                else dispatch(endLoadingScreen())

                dispatch(loadSuccess(data))
                
            } else throw 'Data not valid';
        } catch (err) {
            dispatch(endLoadingScreen())
            dispatch(loadErr())
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