import { Outlet, useNavigate, useLocation  } from "react-router-dom"
import { useEffect, useState, useCallback } from "react";
import { styled } from '@mui/material/styles';
import { useResizeDetector } from 'react-resize-detector';


import useAuth from '../hooks/useAuth';
import useLoadScreen from '../hooks/useLoadScreen';

import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";

import { Box, CssBaseline } from "@mui/material"

import { MENUITEMS } from "../types/consts";

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
  const location = useLocation();
  const { width: innerContainerWidth, height, ref: innerContainerRef } = useResizeDetector();

  const [open, setOpen] = useState(false); // Open Main Menu
  const [currentItem, setCurrentItem] = useState({})

  const { isAuth, loadAuth } = useAuth()
  const { showLoadScreen, resetLoadScreen } = useLoadScreen()


  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  useEffect(() => {
    loadAuth(false)

    const path = location.pathname;
    const currentPage = path.split('/')[1];

    if (currentPage) {
      var item = MENUITEMS.find(i => i.id == currentPage.toLowerCase())

      if (item) setCurrentItem(item)
    }
  }, [])

  useEffect(() => {
    if (!isAuth) {
      resetLoadScreen()
      navigate('/')
    }
  }, [isAuth])
  
  return (
    <MainContainer>
      <CssBaseline />
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} selectItem={setCurrentItem}/>

      <InnerContainer ref={innerContainerRef}>
        <Outlet context={[currentItem, innerContainerWidth]} />
      </InnerContainer>

      {showLoadScreen()}
    </MainContainer>
  )
}

export default DashLayout