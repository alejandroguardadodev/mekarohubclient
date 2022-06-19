import { Outlet, useNavigate } from "react-router-dom"
import { useEffect, useState, useCallback } from "react";
import { styled } from '@mui/material/styles';
import { useRef } from "react";

import useAuth from '../hooks/useAuth';
import useLoadScreen from '../hooks/useLoadScreen';

import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";

import { Box, CssBaseline } from "@mui/material"

import '../style/dashboard.css'

const MainContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  maxHeight: '100vh',
  width: '100%',
  display: "flex",
}))

const InnerContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  paddingTop: 75,
  paddingLeft: 15,
  paddingRight: 25,
  [theme.breakpoints.down("md")]: {
    padding: "50px 20px"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0px"
  },
}))

const DashLayout = () => {
  const navigate = useNavigate()
  const innerContainerRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [innerContainerWidth, setInnerContainerWidth] = useState(0);

  const { isAuth, loadAuth } = useAuth()
  const { showLoadScreen, resetLoadScreen } = useLoadScreen()

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  useEffect(() => {
    setInnerContainerWidth(innerContainerRef.current.offsetWidth - 30);
  })

  useEffect(() => {
    loadAuth(false)
  }, [])

  useCallback(() => {
    if (!isAuth) {
      resetLoadScreen()
      navigate('/')
    }
  }, [isAuth])

  return (
    <MainContainer>
      <CssBaseline />
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose}/>

      <InnerContainer ref={innerContainerRef}>
        <Outlet context={[innerContainerWidth]} />
      </InnerContainer>

      {showLoadScreen()}
    </MainContainer>
  )
}

export default DashLayout