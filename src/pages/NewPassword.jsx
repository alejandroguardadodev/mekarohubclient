import { styled } from '@mui/system'
import { useParams, Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Divider } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';

import NewPasswordForm from '../components/forms/NewPasswordForm'


import goldKey from '../imgs/gold-key.png'

const NewPasswordContainer = styled(Box)(({ theme }) => ({
    maxWidth: '400px',
    borderRadius: '5px',
    boxSizing: 'border-box',
    border: '1px solid rgba(255,255,255,.3)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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

const NewPassword = () => {
    const theme = useTheme();
    const params = useParams()
    const { token } = params

    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
        <NewPasswordContainer container className='bg-dark-1 ' p={5}>
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
        </NewPasswordContainer>
    </>
  )
}

export default NewPassword