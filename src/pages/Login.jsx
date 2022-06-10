import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Grid, Typography, Box } from "@mui/material"
import { Link } from 'react-router-dom'

import { Container } from "../designs"

import door from '../imgs/door.png'

import LoginForm from '../components/forms/LoginForm';

const Login = () => {
  return (
    <>
      <Container container className='rounded w-50 bg-dark-1 flex-col-center' p={5} pb={7}>
        <img src={door} width={100} />
        <Typography variant="h1" className='title color-white-1' mt={2}> Welcome Back </Typography>
        <Typography variant="h5" className='sub-title color-white-1'>We are glad to see you again</Typography>

        <Box mt={2} className="w-100">
          <LoginForm />
        </Box>
      </Container>
    </>
  )
}

export default Login