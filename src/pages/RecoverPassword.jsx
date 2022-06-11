import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Link } from 'react-router-dom'
import { Grid, Typography, Box, Divider } from "@mui/material"

import padlock from "../imgs/padlock.png"

import RecoverPasswordForm from '../components/forms/RecoverPasswordForm';

import { Container } from "../designs"

const RecoverPassword = () => {
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
        <Container container className='rounded w-70 bg-dark-1' p={5} style={{ maxWidth: '400px' }}>
            <Grid item xs={12} className="flex-col-center">
                <Box mb={3}> <img src={padlock} width={70}/> </Box>

                <Typography variant="h3" className='sub-title color-white-1'>Recover Password</Typography>

                <Box mt={2} mb={4} className="w-100">
                  <RecoverPasswordForm />
                </Box>

                <Divider className='w-100' style={{ borderColor: "rgba(255, 255, 255, .35)" }} />

                <Box mt={2} className="w-100 flex-row-between">
                  <Link to="/" style={{ fontWeight: 600 }} className='mh-link color-main'>Sign In</Link>
                  <Link to="/signup" style={{ fontWeight: 600 }} className='mh-link color-main'>Sign Up</Link>
              </Box>
            </Grid>
        </Container>
    </>
  )
}

export default RecoverPassword