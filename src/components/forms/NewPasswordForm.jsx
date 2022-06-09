import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from "react";

import axiosClient from "../../config/axiosClient";
import { NewPasswordSchemas } from "../../schemas";

import { createToast, updateToastError, updateToastSuccess } from "../../helper/toastHelper";

import { Box, Button } from "@mui/material";
import Input from "../controls/Input";

import { ERROR_TYPE_FIELDS } from "../types";

const NewPasswordForm = ({token}) => {
  const [successForm, setSuccessForm] = useState(false)

  const { register, handleSubmit, formState:{ errors }, setError, reset, clearErrors } = useForm({
    resolver: yupResolver(NewPasswordSchemas)
  });

  const onSubmit = async (formData) => {
    const _toastId = createToast('Please wait...')

    try {
      const { data } = await axiosClient.post(`/users/reset-password/${token}`, {...formData})

      updateToastSuccess(_toastId, data.msg)
      clearErrors()
      setSuccessForm(true)
    } catch (err) {
      if (err?.response) {
        const { data } = err.response;

        if (data?.errType === ERROR_TYPE_FIELDS) {
          for (const key in data.fields) {
            const message = data.fields[key]

            setError(key, { type: 'custom', message });
          }
        }
        console.log(err)
        updateToastError(_toastId, data.errMsg)
      }
    }
    
  }

  useEffect(() => {
    if (successForm) {
      reset({password: "", confirmPassword: ""})
      setSuccessForm(false)
    }
    
  }, [successForm])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mt={3}>
        <Input id="password" type="password" label="New Password" register={register} errors={errors} />
      </Box>
      <Box mt={3}>
        <Input id="confirmPassword" type="password" label="Confirm New Password" register={register} errors={errors} />
      </Box>
      <Box mt={3} className="flex-row-center">
        <Button type="submit" variant="outlined" size="large" sx={{ padding: "10px 40px", fontWeight: 700 }}>Create Account</Button>
      </Box>
    </form>
  )
}

export default NewPasswordForm