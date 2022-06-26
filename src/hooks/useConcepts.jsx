import { useSelector, useDispatch } from 'react-redux';

import { loadConcepts, saveConcept} from '../reducers/actions/conceptAction';

import axiosClient, { generateConfig } from '../config/axiosClient';

const useConcepts = () => {
    const dispatch = useDispatch()
    const { concepts } = useSelector(state => state.concepts)

    const axioAuthConfig = generateConfig(localStorage.getItem('token') || "")

    const getAllConcepts = () => dispatch(loadConcepts())

    const createConcept = async (_data) => {
        try {
            const { data } = await axiosClient.post('/concepts', _data, axioAuthConfig)
            const {concept} = data;

            dispatch(saveConcept(concept))

            return data
        } catch (err) {
            return {err}
        }
    }

    return {
        concepts,
        loadConcepts: getAllConcepts,
        saveConcept: createConcept
    }
}

export default useConcepts