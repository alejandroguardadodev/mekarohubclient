import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Link } from 'react-router-dom'
import { Grid, Typography, Box } from "@mui/material"

import padlock from "../imgs/padlock.png"

import RecoverPasswordForm from '../components/forms/RecoverPasswordForm';

import { Container, TwoItemBetween } from "../designs"

const RecoverPassword = () => {
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
        <Container container className='rounded w-70 bg-dark-1' p={5} >
            <Grid item xs={12} className="flex-col-center">
                <Box mb={3}> <img src={padlock} width={140}/> </Box>

                <Typography variant="h3" className='sub-title color-white-1'>Recover Password</Typography>
                <Typography variant="h5" className='color-white-1' textAlign="center" gutterBottom> Please use the <strong className='uppercase color-primary'>email / username</strong> related to your account </Typography>

                <RecoverPasswordForm />

                {isSmall && (
                  <Box mt={5} display="flex" gap={5}>
                      <Link to="/" style={{letterSpacing: '2px', fontSize: "20px"}} className='mh-link uppercase fnt-bold color-primary'>Sign In</Link>
                      <Link to="/signup" style={{letterSpacing: '2px', fontSize: "20px"}} className='mh-link uppercase fnt-bold color-primary'>Sign Up</Link>
                  </Box>
                )}
            </Grid>
        </Container>
        
        {!isSmall && (
          <TwoItemBetween className='w-70' mt={3}>
              <Link to="/" style={{ fontWeight: 700 }} className='mh-link color-black'>Do you already have an account? Sign In</Link>
              <Link to="/signup" style={{ fontWeight: 700 }} className='mh-link color-black'>Don't you have an account yet? Sign Up</Link>
          </TwoItemBetween>
        )}
    </>
  )
}

export default RecoverPassword