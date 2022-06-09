import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

import axiosClient from '../config/axiosClient';

import { Grid, Typography, Button, Box } from "@mui/material"

import { showSuccess, showError } from "../helper/toastHelper";

import { Container } from '../designs';

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
    <Container className="w-70 rounded bg-dark-1" container p={5} >
      <Grid item xs={12} className="flex-col-center">
        <Typography variant="h3" className='color-primary'>HELLO THERE</Typography>
        <Typography variant="h1" className='title color-white-2' gutterBottom > 
          {
            (status === 1)? "CONFIRMED USER!":
            (status === 2)? <span className='color-error'>INVALID TOKEN!!!</span>:
            "Waiting..."
          }
        </Typography>

        <hr style={{ borderBottom: '1px solid black', width: "100%", marginTop: "10px" }} />

        <Box mt={2} mb={1}>
          <Button variant="outlined" size="large" onClick={() => {navigate("/")}}>Go To Login</Button>
        </Box>
      </Grid>
    </Container>
  )
}

export default Confirm