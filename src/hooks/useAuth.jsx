import { useSelector, useDispatch } from 'react-redux';

import { loadAuth } from '../reducers/actions/authActions';

const useAuth = () => {
    const dispatch = useDispatch()

    const { isAuth, user } = useSelector(state => state.auth)

    const getAuthSession = (showMessage = true) => dispatch(loadAuth(showMessage))
    
    return {
        isAuth,
        user,
        loadAuth: getAuthSession
    }
}

export default useAuth