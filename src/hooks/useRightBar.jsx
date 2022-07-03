import { useSelector, useDispatch } from 'react-redux';

import { showRightBar, closeRightBar } from '../reducers/actions/rightbarActions'

const useRightBar = () => {

    const dispatch = useDispatch()

    const { openRightBar, width, renderRightBar, data, toShow } = useSelector(state => state.rightbar)

    const _showMenu = (data) => dispatch(showRightBar(data))
    const _closeMenu = () => dispatch(closeRightBar())

    return {
        openRightBar,
        rightbarWidth: width,
        renderRightBar, 
        data, 
        toShow,
        showRightBar: _showMenu,
        closeRightBar: _closeMenu
    }
}

export default useRightBar