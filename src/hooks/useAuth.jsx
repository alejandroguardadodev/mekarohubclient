import { useSelector, useDispatch } from 'react-redux';

import { loadAuth } from '../reducers/actions/authActions';

import { generateConfig } from '../config/axiosClient';

const useAuth = () => {
    const dispatch = useDispatch()

    const { isAuth, user } = useSelector(state => state.auth)

    const getAuthSession = (showMessage = true) => dispatch(loadAuth(showMessage))

    let token = localStorage.getItem('token');

    const axioAuthConfig = generateConfig(token)
    
    return {
        isAuth,
        user,
        axioAuthConfig,
        loadAuth: getAuthSession
    }
}

export default useAuth