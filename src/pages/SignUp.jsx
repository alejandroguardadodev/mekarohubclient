import { styled } from '@mui/material/styles';

import { Grid, Typography } from "@mui/material"
import { Link } from 'react-router-dom'

import SignUpForm from "../components/forms/SignUpForm"

import joinsignup from '../imgs/joinsignup.svg'

const MainGrid = styled(Grid)(({ theme }) => ({
  boxShadow: "0px 10px 25px -10px rgba(0,0,0,0.65)",
  overflow: "hidden",
  '&>.img-header-signup': {
    background: 'linear-gradient(73deg, rgba(48,140,140,1) 0%, rgba(94,191,181,1) 100%)', 
    display: "flex", 
    justifyContent: "center", 
    alignItems : "center", 
    flexDirection: "column"
  },
  '&>.form-signup': {
    background: "#1D2635", 
    boxShadow: "-10px 0px 35px -15px rgba(0,0,0,0.65)",
    zIndex: 10,
    paddingTop: '3rem'
  },
  '& .signin-link': {
    textDecoration: "none", 
    color: "white", 
    textTransform: "uppercase", 
    fontWeight: 800
  },
  [theme.breakpoints.up("md")]: {
    borderRadius: 10
  },
  [theme.breakpoints.down("md")]: {
    borderRadius: 10
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: 0
  }
}))

const SignUp = () => {
  return (
    <MainGrid container>
      <Grid item className='img-header-signup' xs={12} lg={5} py={{ xs: 5, lg: 0 }} >
          <Typography variant="h1" className='header'> Mekaro Hub </Typography>
          <Typography variant="h5" className='sub-header'>Are you ready for the next level?</Typography>

          <img src={joinsignup} width="380" />

          <Typography variant="body1" component="div" gutterBottom color="white" letterSpacing={1}>
            Do you already have an account? <Link to="/" className='signin-link'>Sign In</Link>
          </Typography>
        </Grid>

        <Grid item className='form-signup' xs={12} lg={7} p={{ xs: 3, sm: 6, md: 8 }} >
          <Typography variant="h1" component="div" color="#798194" letterSpacing={1}>
            Sign Up
          </Typography>
          <SignUpForm />
        </Grid>

    </MainGrid>
  )
}

export default SignUp