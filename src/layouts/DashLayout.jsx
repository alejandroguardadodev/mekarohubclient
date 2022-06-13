import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react";

import useAuth from '../hooks/useAuth';
import useLoadScreen from '../hooks/useLoadScreen';

const DashLayout = () => {
  const navigate = useNavigate()
  
  const { isAuth, loadAuth } = useAuth()
  const { showLoadScreen, resetLoadScreen } = useLoadScreen()

  useEffect(() => {
    loadAuth(false)
  }, [])

  useEffect(() => {
    if (!isAuth) {
      resetLoadScreen()
      navigate('/')
    }
  }, [isAuth])

  return (
    <div>
        <Outlet />

        {showLoadScreen()}
    </div>
  )
}

export default DashLayout