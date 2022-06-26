import {
    LOAD_CONCEPTS_SUCCESS,
    LOAD_CONCEPTS_ERROR,
    NEW_CONCEPTS_SUCCESS
} from './types/conceptTypes'

const initialState = {
    concepts: []
}

export default function(state = initialState, action) {
    const { type } = action

    switch (type) {
        case LOAD_CONCEPTS_SUCCESS:
            let concepts = action.payload
                
            return {
                ...state,
                concepts,
            };

        case NEW_CONCEPTS_SUCCESS:
            let concept = action.payload
            let ncConcepts = [...state.concepts, concept]

            return {
                ...state,
                concepts: ncConcepts
            };

        case LOAD_CONCEPTS_ERROR:
            return {
                ...state,
                concepts: [],
            };
    
        default:
            return state;
    }
}