import { styled } from '@mui/material/styles';
import { Outlet, useNavigate } from "react-router-dom";

import { useEffect } from 'react';

import { Container } from "@mui/system"

import useAuth from '../hooks/useAuth';
import useLoadScreen from '../hooks/useLoadScreen';

import '../style/auth.css'

const CustomeContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    height: '100vh', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: "column"
  },
  [theme.breakpoints.down("md")]: {
    padding: "50px 20px"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0px"
  },
}))

const AuthLayout = () => {
  const navigate = useNavigate()
  
  const { isAuth, loadAuth } = useAuth()
  const { showLoadScreen, resetLoadScreen } = useLoadScreen()

  useEffect(() => {
    loadAuth()
  }, [])

  useEffect(() => {
    if (isAuth) {
      resetLoadScreen()
      navigate('/dashboard')
    }
  }, [isAuth])

  return (
    <CustomeContainer>
        <Outlet />

        {showLoadScreen()}
    </CustomeContainer>
  )
}

export default AuthLayout