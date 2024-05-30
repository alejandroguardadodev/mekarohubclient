import { styled } from '@mui/system'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Grid, Typography, Box } from "@mui/material"
import { Link } from 'react-router-dom'

import SignUpForm from "../components/forms/SignUpForm"

import joinsignup from '../imgs/joinsignup.svg'

const SignUpContainer = styled(Grid)(({ theme }) => ({
  boxSizing: 'border-box',
  borderRadius: '5px',
  transition: theme.transitions.create(['box-shadow', 'border']),
  [theme.breakpoints.down('sm')]: {
    borderRadius: '0px',
    width: '100%',
    height: '100%',
    background: '#1D2635',
    margin: '0px !important'
  },
  [theme.breakpoints.up('sm')]: {
    width: '80%',
    borderRadius: '5px',
    '&:hover': {
      boxShadow: "0px 0px 25px -5px rgba(192, 227, 170, 0.8)",
      border: '1px solid rgb(192, 227, 170)',
    }
  },
}))

const GridContainerForm = styled(Grid)(({ theme }) => ({
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {
    boxShadow: 'none !important',
  },
  [theme.breakpoints.up('sm')]: {
    borderRadius: '5px',
    margin: '0px !important',
    border: '1px solid rgba(255,255,255,.3)',
  },
}))

const BoxContainer = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start'
}))

const SignUp = () => {
  const theme = useTheme();

  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SignUpContainer container>
      {!isMedium && (
        <Grid item className='bg-linear-tp-1 flex-col-center' xs={12} lg={5} py={{ xs: 5, lg: 0 }} >
          <Typography variant="h1" className='title color-white-1'> Mekaro Hub </Typography>
          <Typography variant="h5" className='sub-title color-white-1'>Are you ready for the next level?</Typography>

          <img src={joinsignup} width="380" />

          <Typography variant="body1" component="p">
            <Link to="/" className='mh-link-3 color-white-1'>Do you already have an account? {" "}
              <span style={{ textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px" }} >Sign In</span>
            </Link>
          </Typography>
        </Grid>
      )}

      <GridContainerForm item className='shadow-type-1 bg-dark-1' xs={12} lg={7} p={{ xs: 3, sm: 6, md: 8 }} >
        <BoxContainer>
          <Typography variant="h1" className="color-dark-3" letterSpacing={1}> Sign Up </Typography>
          
          <SignUpForm />
          

          {isMedium && (<Box mt={5}>
            <Typography variant="body1" component="p" sx={{fontSize: '.9rem !important'}}>
              <Link to="/" className='mh-link-3 color-main'>Do you already have an account? {" "}
                <span style={{ textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", }} >Sign In</span>
              </Link>
            </Typography>
          </Box>)}
        </BoxContainer>
      </GridContainerForm>

    </SignUpContainer>
  )
}

export default SignUp