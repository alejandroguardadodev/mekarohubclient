import { styled } from '@mui/system'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Link } from 'react-router-dom'
import { Grid, Typography, Box, Divider } from "@mui/material"

import padlock from "../imgs/padlock.png"

import RecoverPasswordForm from '../components/forms/RecoverPasswordForm';

const RecoverPasswordContainer = styled(Grid)(({ theme }) => ({
  maxWidth: '400px',
  borderRadius: '5px',
  boxSizing: 'border-box',
  border: '1px solid rgba(255,255,255,.3)',
  [theme.breakpoints.up('sm')]: {
    '&:hover': {
      boxShadow: "0px 0px 25px -5px rgba(192, 227, 170, 0.8)",
      border: '1px solid rgb(192, 227, 170)',
    }
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: '0px !important',
    maxWidth: '100%',
    width: '100%',
    height: '100%',
    border: '0px !important'
  }
}))

const RecoverPassword = () => {
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
        <RecoverPasswordContainer container className='bg-dark-1' p={5}>
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
        </RecoverPasswordContainer>
    </>
  )
}

export default RecoverPassword