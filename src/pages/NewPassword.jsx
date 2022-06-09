import { useParams, Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';

import NewPasswordForm from '../components/forms/NewPasswordForm'

import { Container, TwoItemBetween } from '../designs'

import goldKey from '../imgs/gold-key.png'

const NewPassword = () => {
    const theme = useTheme();
    const params = useParams()
    const { token } = params

    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
        <Container container className='rounded w-70 bg-dark-1 flex-col-center' p={5}>
            <img src={goldKey} width={80} />
            <Typography variant="h3" mt={3} className='sub-title color-white-1 text-center'>Create a new password</Typography>

            <Box mt={2} className="w-100">
                <NewPasswordForm token={token} />
            </Box>

            {isSmall && (
                <Box mt={5} display="flex" gap={5}>
                    <Link to="/" style={{letterSpacing: '2px', fontSize: "20px"}} className='mh-link uppercase fnt-bold color-primary'>Sign In</Link>
                    <Link to="/signup" style={{letterSpacing: '2px', fontSize: "20px"}} className='mh-link uppercase fnt-bold color-primary'>Sign Up</Link>
                </Box>
            )}
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

export default NewPassword