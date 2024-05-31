import { Outlet, useNavigate, useLocation  } from "react-router-dom"
import { useEffect, useState, useCallback } from "react";
import { styled } from '@mui/material/styles';
import { useResizeDetector } from 'react-resize-detector';

import useRightBar from "../hooks/useRightBar";
import useAuth from '../hooks/useAuth';
import useLoadScreen from '../hooks/useLoadScreen';

import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";
import RightBar from "../components/UI/RightBar";

import { Box, CssBaseline } from "@mui/material"

import { MENUITEMS } from "../types/consts";

import '../style/dashboard.css'

const MainContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  maxHeight: '100vh',
  width: '100%',
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    paddingTop: '60px',
    boxSizing: 'border-box',
  }
}))

const InnerContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  paddingTop: 63,
  paddingLeft: 15,
  paddingRight: 25,
  [theme.breakpoints.down("md")]: {
    padding: "50px 20px"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0px 5%"
  },
}))

const DashLayout = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const { width: innerContainerWidth, height, ref: innerContainerRef } = useResizeDetector();

  const [open, setOpen] = useState(true); // Open Main Menu
  const [currentItem, setCurrentItem] = useState({})

  const { loadAuth } = useAuth()
  const { showLoadScreen, resetLoadScreen } = useLoadScreen()


  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const { openRightBar } = useRightBar()

  useEffect(() => {
    loadAuth((auth) => {
      if (!auth) {
        resetLoadScreen()
        navigate('/')
      }
    }, false)

    const path = location.pathname;
    const currentPage = path.split('/')[1];

    if (currentPage) {
      var item = MENUITEMS.find(i => i.id == currentPage.toLowerCase())

      if (item) setCurrentItem(item)
    }
  }, [])
  
  return (
    <MainContainer>
      <CssBaseline />
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} selectItem={setCurrentItem}/>

      <InnerContainer ref={innerContainerRef}>
        <Outlet context={[currentItem, innerContainerWidth]} />
      </InnerContainer>

      <RightBar open={openRightBar} />

      {showLoadScreen()}
    </MainContainer>
  )
}

export default DashLayout