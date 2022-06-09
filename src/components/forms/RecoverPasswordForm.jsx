import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from "react";

import { Box, Button } from '@mui/material';

import Input from "../controls/Input";

import { RecoverPasswordSchemas } from "../../schemas";

import axiosClient from "../../config/axiosClient";

import { createToast, updateToastError, updateToastSuccess } from "../../helper/toastHelper";

const RecoverPasswordForm = () => {

   const [successForm, setSuccessForm] = useState(false)

  const { register, handleSubmit, formState:{ errors }, reset, clearErrors  } = useForm({
    resolver: yupResolver(RecoverPasswordSchemas)
  });

  const onSubmit = async (formData) => {
    const _toast = createToast("Please wait...")

    try {
      const { data } = await axiosClient.post('/users/forgot-password', formData)

      updateToastSuccess(_toast, data.msg)
      clearErrors()
      setSuccessForm(true)
    } catch (err) {
      if (err?.response) {
        const { data } = err.response;

        updateToastError(_toast, data.errMsg)
      }
    }
  }

  useEffect(() => {
    if (successForm) {
      reset({entity: ""})
      setSuccessForm(false)
    }
    
  }, [successForm])

  return (
    <form style={{width: "100%"}} onSubmit={handleSubmit(onSubmit)}>
        <Box mt={3} fullWidth>
            <Box mt={3} fullWidth>
                <Input id="entity" fullWidth type="text" label="Email or Username" register={register} errors={errors} />
            </Box>
            <Box mt={3} style={{ display: "flex", justifyContent: "center" }}>
                <Button type="submit" variant="outlined" size="large" sx={{ padding: "10px 40px", fontWeight: 700 }}>Send Link</Button>
            </Box>
        </Box>
    </form>
  )
}

export default RecoverPasswordForm