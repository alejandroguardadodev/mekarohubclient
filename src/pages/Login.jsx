import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Grid, Typography, Box, Divider } from "@mui/material"
import { Link } from 'react-router-dom'

import { Container } from "../designs"

import LoginImg from '../imgs/LoginImg.svg'

import LoginForm from '../components/forms/LoginForm';

const Login = () => {
  return (
    <>
      <Container container className='rounded w-50 bg-dark-1 flex-col-center' p={4} pt={4} pb={6} style={{ maxWidth: '400px' }}>
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
      </Container>
    </>
  )
}

export default Login