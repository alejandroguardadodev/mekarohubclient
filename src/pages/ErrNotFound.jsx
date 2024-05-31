import { styled } from "@mui/system"

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import imgNotFound from '../imgs/notfoundimg.png'

const BoxContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  boxSizing: 'border-box',
  padding: '5%',
}))


const ErrNotFound = () => {
  return (
    <BoxContainer>
      <img width="300px" src={imgNotFound} />
      <Typography variant="h1" sx={{ color: 'white', fontSize: '2.8rem' }}>ERROR: PAGE NOT FOUND</Typography>
      <Typography variant="subtitle1" sx={{ color: 'white' }}>Oops, looks like you're lost. The page you're looking for wasn't found. We're working on it. Thanks for your understanding!</Typography>
    </BoxContainer>
  )
}

export default ErrNotFound
