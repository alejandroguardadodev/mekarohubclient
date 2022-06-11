import { RecoverPasswordSchemas } from "../../schemas";

import { useEffect } from "react";

import axiosClient from "../../config/axiosClient";
import useClientForm from "../../hooks/useClientForm";

import { Box, Button, Typography } from '@mui/material';
import Input from "../controls/Input";

const RecoverPasswordForm = () => {

  const { formData, errors, register, setErrorsByErr, onSubmit, showSuccessMessage } = useClientForm(RecoverPasswordSchemas, { entity: "" })

  const recoverPassword = async (_data) => {
    try {
      const { data } = await axiosClient.post('/users/forgot-password', _data)
      showSuccessMessage(data.msg)
    } catch (err) {
      setErrorsByErr(err)
    }
  }

  useEffect(() => {
    if (formData) recoverPassword(formData)
  }, [formData])

  return (
    <form className="w-100" onSubmit={onSubmit}>
        <Box mt={3} fullWidth>
            <Box mt={3} fullWidth>
                <Input id="entity" fullWidth type="text" label="Email or Username" register={register} errors={errors} />
                <Typography variant="caption" style={{ lineHeight: "-1px", fontStyle: "italic", color: "rgba(255, 255, 255, .8)" }}> Please use the <strong className='color-primary'>email / username</strong> related to your account* </Typography>
            </Box>
            <Box mt={3} style={{ display: "flex", justifyContent: "center" }}>
                <Button type="submit" variant="outlined" size="large" fullWidth sx={{ padding: "10px 40px", fontWeight: 700 }}>Send Link</Button>
            </Box>
        </Box>
    </form>
  )
}

export default RecoverPasswordForm