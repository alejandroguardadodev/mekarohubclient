import { styled } from '@mui/system';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Typography, Box, Divider } from "@mui/material"
import { Link } from 'react-router-dom'

import MainContainer from '../components/UI/MainContainer';

import LoginImg from '../imgs/LoginImg.svg'

import LoginForm from '../components/forms/LoginForm';


const LoginContainer = styled(Box)(({ theme }) => ({
  border: '1px solid rgba(255,255,255,.3)',
  borderRadius: '4px',
  minWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  transition: theme.transitions.create(['box-shadow', 'border']),
  [theme.breakpoints.up('sm')]: {
    '&:hover': {
      boxShadow: "0px 0px 25px -5px rgba(192, 227, 170, 0.8)",
      border: '1px solid rgb(192, 227, 170)',
    }
  },
  [theme.breakpoints.up('md')]: {
    minWidth: '600px',
  },
  [theme.breakpoints.up('lg')]: {
    minWidth: '450px',
  },
  [theme.breakpoints.down('md')]: {
    minWidth: '500px',
  },
  [theme.breakpoints.down('sm')]: {
    border: '0px !important',
    minWidth: '0px',
    width: '100%',
    height: '100%',
  }
}))

const Login = () => {
  return (
    <>
      <LoginContainer className='bg-dark-1' p={4} pt={4} pb={6} >
        <img src={LoginImg} width={200} />
        <Typography variant="h1" className='title color-white-1' mt={1}> Welcome Back </Typography>
        <Typography variant="h5" className='sub-title color-white-1'>We are glad to see you again</Typography>

        <Box mt={2} mb={8} className="w-100">
          <LoginForm />
        </Box>

        <Divider className='w-100' style={{ borderColor: "rgba(255, 255, 255, .35)" }} />

        <Box mt={2} className="w-100 flex-row-between">
            <Link to="/signup" style={{ fontWeight: 600 }} className='mh-link color-main'>Sign Up</Link>
            <Link to="/recover-password" style={{ fontWeight: 600 }} className='mh-link color-main'>Forgot Password?</Link>
        </Box>
      </LoginContainer>
    </>
  )
}

export default Login