import { styled } from '@mui/material/styles';

import {Box, Paper, Grid, Typography} from '@mui/material';

import profileuser from '../imgs/profileuser.png'

import useAuth from '../hooks/useAuth';

//#1A2027
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1A2027',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
}));
  
const MyProfile = () => {

    const {user: {username}} = useAuth()

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={4} className="flex-col-center pt-8">
                <img src={profileuser} width={160} />

                <Typography variant="h5"  sx={{ flexGrow: 1, fontSize: "18px !important", marginTop: 2}} className='menu-header color-white-2 pointer' >@{username}</Typography>
            </Grid>
            <Grid item xs={8}>
                <Item>xs=8</Item>
            </Grid>
        </Grid>
    </Box>
  )
}

export default MyProfile