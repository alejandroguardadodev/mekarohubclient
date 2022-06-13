import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Box } from "@mui/system"

import { showMsg } from '../helper/toastHelper';

import { resetLoadScreen } from '../reducers/actions/loadActions';

const useLoadScreen = () => {
    const dispatch = useDispatch()

    const { isLoad, message } = useSelector(state => state.load)
    
    const showLoadScreen = () => {
        if (!isLoad) return null;

        return (
            <Box className="w-100 hv-100 container-absolute-up bg-color-o80-dark-2 flex-row-center" zIndex={100}>
              <div className="sk-cube-grid">
                <div className="sk-cube sk-cube1"></div>
                <div className="sk-cube sk-cube2"></div>
                <div className="sk-cube sk-cube3"></div>
                <div className="sk-cube sk-cube4"></div>
                <div className="sk-cube sk-cube5"></div>
                <div className="sk-cube sk-cube6"></div>
                <div className="sk-cube sk-cube7"></div>
                <div className="sk-cube sk-cube8"></div>
                <div className="sk-cube sk-cube9"></div>
              </div>
          </Box>
        )
    }

    const reset = () => dispatch(resetLoadScreen())

    useEffect(() => {
        const isEmpty = Object.keys(message).length === 0;

        if (!isLoad && !isEmpty) {
            showMsg(message)
        }
    }, [isLoad])

    return {
        isLoad,
        showLoadScreen,
        resetLoadScreen: reset
    }
}

export default useLoadScreen