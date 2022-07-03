import {
    OPEN_RIGHT_BAR,
    CLOSE_RIGHT_BAR
} from '../types/rightbarTypes'

export function showRightBar(data) {
    return (dispatch) => {
        dispatch(openRightBarInfo(data))
    }
}

const openRightBarInfo = data => ({
    type: OPEN_RIGHT_BAR,
    payload: data
})

export function closeRightBar() {
    return async (dispatch) => {
        dispatch({type: CLOSE_RIGHT_BAR})
    }
}