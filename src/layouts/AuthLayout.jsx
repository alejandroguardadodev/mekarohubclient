import { styled } from '@mui/material/styles';
import { Outlet, useNavigate } from "react-router-dom";

import { useEffect } from 'react';

import { Container } from "@mui/system"

import useAuth from '../hooks/useAuth';
import useLoadScreen from '../hooks/useLoadScreen';

import '../style/auth.css'

const CustomeContainer = styled(Container)(({ theme }) => ({
  height: '100vh', 
  width: '100vw',
  display: 'flex', 
  flexDirection: "column",
  justifyContent: 'center', 
  alignItems: 'center',
  boxSizing: 'border-box',
  [theme.breakpoints.down("md")]: {
    padding: "0px",
  }
}))

const AuthLayout = () => {
  const navigate = useNavigate()
  
  const { loadAuth } = useAuth()
  const { showLoadScreen, resetLoadScreen } = useLoadScreen()

  useEffect(() => {
    loadAuth((auth) => {
      if (auth) {
        resetLoadScreen()
        navigate('/dashboard')
      }
    })
  }, [])

  return (
    <CustomeContainer>
        <Outlet />

        {showLoadScreen()}
    </CustomeContainer>
  )
}

export default AuthLayout