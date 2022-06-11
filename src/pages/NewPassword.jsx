import { useParams, Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Divider } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';

import NewPasswordForm from '../components/forms/NewPasswordForm'

import { Container } from '../designs'

import goldKey from '../imgs/gold-key.png'

const NewPassword = () => {
    const theme = useTheme();
    const params = useParams()
    const { token } = params

    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
        <Container container className='rounded w-70 bg-dark-1 flex-col-center' p={5} style={{ maxWidth: '400px' }}>
            <img src={goldKey} width={80} />
            <Typography variant="h3" mt={3} className='sub-title color-white-1 text-center'>Create a new password</Typography>

            <Box mt={2} mb={7} className="w-100">
                <NewPasswordForm token={token} />
            </Box>

            <Divider className='w-100' style={{ borderColor: "rgba(255, 255, 255, .35)" }} />

            <Box mt={2} className="w-100 flex-row-between">
                <Link to="/" style={{ fontWeight: 600 }} className='mh-link color-main'>Sign In</Link>
                <Link to="/signup" style={{ fontWeight: 600 }} className='mh-link color-main'>Sign Up</Link>
            </Box>
        </Container>
    </>
  )
}

export default NewPassword