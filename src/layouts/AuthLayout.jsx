import { styled } from '@mui/material/styles';
import { Outlet } from "react-router-dom"

import { Container } from "@mui/system"

import '../style/auth.css'

const CustomeContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    height: '100vh', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  [theme.breakpoints.down("md")]: {
    padding: "50px 20px"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0px"
  },
}))

const AuthLayout = () => {
  return (
    <CustomeContainer>
        <Outlet />
    </CustomeContainer>
  )
}

export default AuthLayout