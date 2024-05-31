import { styled } from "@mui/system"

import useAuth from '../hooks/useAuth'

import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography"

import welcomeImg from '../imgs/receptionist.png'

const BoxContainer = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))

const Dashboard = () => {
  const {user} = useAuth()

  return (
    <BoxContainer>
      <img width="300px" src={welcomeImg} />
      <Typography variant="h1" sx={{ color: 'white', fontSize: '2.8rem' }}>Welcome</Typography>
      <Typography variant="subtitle1" sx={{ color: 'white' }}>It's a pleasure to have you back, <span style={{ fontStyle: 'italic', textDecoration: 'underline' }}>{user.username}</span></Typography>
    </BoxContainer>
  )
}

export default Dashboard