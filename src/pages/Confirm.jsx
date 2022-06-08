import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';

import axiosClient from '../config/axiosClient';

import { Grid, Typography, Button, Box } from "@mui/material"

import { showSuccess, showError } from "../helper/toastHelper";

const MainGrid = styled(Grid)(({ theme }) => ({
  boxShadow: "0px 10px 25px -10px rgba(0,0,0,0.65)",
  overflow: "hidden",
  width: '70%',
  background: "white",
  borderRadius: 10,
  [theme.breakpoints.down("sm")]: {
    borderRadius: 0
  }
}))

const Confirm = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [status, setStatus] = useState(0)

  const { token } = params

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await axiosClient(`/users/confirm/${token}`)
  
        showSuccess(data.msg)
        setStatus(1)
      } catch (err) {
        if (err?.response) {
          const { data } = err.response;
  
          showError(data.errMsg)
          setStatus(2)
        }
      }
    }

    load()
  }, [])

  return (
    <MainGrid container p={5} >
      <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
        <Typography variant="h3" className='sub-header' color="#308C8C">- MEKARO HUB -</Typography>
        <Typography variant="h1" gutterBottom className='header-black'> 
          {
            (status === 1)? "CONFIRMED USER!":
            (status === 2)? <span style={{color: "#D91EBA"}}>INVALID TOKEN!!!</span>:
            "Waiting..."
          }
        </Typography>

        <hr style={{ borderBottom: '1px solid black', width: "100%", marginTop: "10px" }} />

        <Box mt={2} mb={1}>
          <Button variant="outlined" size="large" onClick={() => {navigate("/")}}>Go To Login</Button>
        </Box>
      </Grid>
    </MainGrid>
  )
}

export default Confirm