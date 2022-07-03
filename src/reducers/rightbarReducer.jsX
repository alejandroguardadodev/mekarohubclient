import {
    OPEN_RIGHT_BAR,
    CLOSE_RIGHT_BAR
} from './types/rightbarTypes'

const initialState = {
    openRightBar: false,
    width: 260,
    data: {},
    toShow: ''
}

export default function(state = initialState, action) {
    const { type } = action

    switch (type) {
        case OPEN_RIGHT_BAR:
            let {width, data, toShow} = action.payload
            
            return {
                ...state,
                openRightBar: true,
                width,
                data,
                toShow
            };

        case CLOSE_RIGHT_BAR:
            return {
                ...state,
                openRightBar: false,
                width: 260,
                data: {},
                toShow: ''
            };
    
        default:
            return state;
    }h
}