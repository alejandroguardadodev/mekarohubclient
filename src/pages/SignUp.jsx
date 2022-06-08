import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Grid, Typography, Box } from "@mui/material"
import { Link } from 'react-router-dom'

import SignUpForm from "../components/forms/SignUpForm"

import joinsignup from '../imgs/joinsignup.svg'

import { Container } from "../designs"

const SignUp = () => {
  const theme = useTheme();

  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  console.log(isMedium)
  return (
    <Container className="rounded" container>
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

          <Typography variant="body1" component="p">
            <Link to="/recover-password" className='mh-link-3 color-white-1'>Have you forgotten your password? </Link>
          </Typography>
        </Grid>
      )}

      <Grid item className='shadow-type-1 bg-dark-1' xs={12} lg={7} p={{ xs: 3, sm: 6, md: 8 }} >
        <Typography variant="h1" className="color-dark-3" letterSpacing={1}> Sign Up </Typography>
        <SignUpForm />

        {isMedium && (<Box mt={5}>
          <Typography variant="body1" component="p">
            <Link to="/" className='mh-link-3 color-main'>Do you already have an account? {" "}
              <span style={{ textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px" }} >Sign In</span>
            </Link>
          </Typography>

          <Typography variant="body1" component="p">
            <Link to="/recover-password" className='mh-link-3 color-main'>Have you forgotten your password? </Link>
          </Typography>
        </Box>)}
      </Grid>

    </Container>
  )
}

export default SignUp