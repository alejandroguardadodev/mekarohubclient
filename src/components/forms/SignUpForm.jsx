import { useForm } from "react-hook-form";
import { styled } from '@mui/material/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import axiosClient from "../../config/axiosClient";

import { Box, Button } from '@mui/material';

import { signUpSchemas } from "../../schemas";
import { createToast, updateToastError, updateToastSuccess } from "../../helper/toastHelper";

import Input from "../controls/Input";

import { ERROR_TYPE_FIELDS } from "../types";

const TextFieldGroup = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'block',
  [theme.breakpoints.up("lg")]: {
    display: "flex", 
    justifyContent: "space-between", 
    gap: '20px'
  },
  [theme.breakpoints.down("lg")]: {
    '&>.MuiFormControl-root': {
      marginTop: '24px'
    },
    '&>.remove-space-input': {
      marginTop: '0px'
    }
  }
}))

const SignUpForm = () => {

  const { register, handleSubmit, formState:{ errors }, setError } = useForm({
    resolver: yupResolver(signUpSchemas)
  });

  const onSubmit = async (formData) => {
    const _toast = createToast("Please wait...")

    try {
      const { data } = await axiosClient.post('/users/signup', formData)

      updateToastSuccess(_toast, data.msg)
      
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
        updateToastError(_toast, data.errMsg)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mt={3} fullWidth>
        <TextFieldGroup>
          <Input id="firstName" className="remove-space-input" label="First Name" register={register} errors={errors} />
          <Input id="lastName" label="Last Name" register={register} errors={errors} />
        </TextFieldGroup>
        <Box mt={3}>
          <Input id="username" label="Username" register={register} errors={errors} />
        </Box>
        <Box mt={3}>
          <Input id="email" type="email" label="Email" register={register} errors={errors} />
        </Box>
        <Box mt={3}>
          <Input id="password" type="password" label="Password" register={register} errors={errors} />
        </Box>
        <Box mt={3}>
          <Input id="confirmPassword" type="password" label="Confirm Password" register={register} errors={errors} />
        </Box>
        <Box mt={3}>
          <Button type="submit" variant="outlined" size="large" sx={{ padding: "10px 40px", fontWeight: 700 }}>Create Account</Button>
        </Box>
      </Box>
    </form>
  )
}

export default SignUpForm