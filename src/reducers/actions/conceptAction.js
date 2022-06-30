import { 
    LOAD_CONCEPTS_ERROR,
    LOAD_CONCEPTS_SUCCESS,
    NEW_CONCEPTS_ERROR,
    NEW_CONCEPTS_SUCCESS,
    NEW_ORDER_CONCEPTS_SUCCESS,
    NEW_ORDER_CONCEPTS_ERROR
 } from "../types/conceptTypes";

 import {
    startLoadingScreen,
    endLoadingScreen,
    endLoadingScreenWithMessage
 } from './globalActions'

import axiosClient, {generateConfig} from "../../config/axiosClient";

export function loadConcepts() {
    return async (dispatch) => {
        dispatch(startLoadingScreen())

        try {
            // GET TOKEN /////////////////////////////////////
            let token = localStorage.getItem('token');
            if (!token) return dispatch(endLoadingScreen())
            const config = generateConfig(token)
            
            const { data } = await axiosClient.get('/concepts', config)

            if (data) {
                dispatch(endLoadingScreen())
                dispatch(loadSuccess(data))
            } else throw 'Data not valid';
        } catch (err) {
            dispatch(endLoadingScreen())
            dispatch(loadErr())
        }
    }
}

const loadSuccess = data => ({
    type: LOAD_CONCEPTS_SUCCESS,
    payload: data
})

const loadErr = () => ({
    type: LOAD_CONCEPTS_ERROR
})

// ------------------------------------------------------------------
export function saveConcept(concept) {
    return async (dispatch) => dispatch({
        type: NEW_CONCEPTS_SUCCESS,
        payload: concept
    })
}

export function saveConceptError() {
    return async (dispatch) => dispatch({
        type: NEW_CONCEPTS_ERROR
    })
}

// ------------------------------------------------------------------
export function reorderConcept(concepts) {
    return async (dispatch) => {
        try {
            // GET TOKEN /////////////////////////////////////
            let token = localStorage.getItem('token');
            if (!token) return dispatch(endLoadingScreen())
            const config = generateConfig(token)
            
            const { data } = await axiosClient.post('/concepts/reorder', {concepts}, config)

            if (data) {
                console.log('Response', data)
                dispatch(reorderConceptOk())
            } else throw 'Data not valid';
        } catch (err) {
            dispatch(reorderConceptError())
        }
    }
}

const reorderConceptOk = () => ({
    type: NEW_ORDER_CONCEPTS_SUCCESS,
})

const reorderConceptError = () => ({
    type: NEW_ORDER_CONCEPTS_ERROR
})