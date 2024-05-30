import { styled } from '@mui/system'
import { SignUpSchemas } from "../../schemas";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axiosClient from "../../config/axiosClient";
import useClientForm from "../../hooks/useClientForm"

import { TextFieldGroup } from "../../designs";
import { Box, Button } from '@mui/material';
import Input from "../controls/Input";

const CustomForm = styled('form')(() => ({
  width: '100%'
}))

const SignUpForm = () => {
  const navigate = useNavigate()

  const { formData, errors, register, setErrorsByErr, onSubmit, showSuccessMessage } = useClientForm(SignUpSchemas, { 
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const signUp = async (_data) => {
    try {
      const { data } = await axiosClient.post('/users/signup', _data)
      showSuccessMessage(data.msg)
      navigate('/')
    } catch (err) {
      setErrorsByErr(err)
    }
  }

  useEffect(() => {
    if (formData) signUp(formData)
  }, [formData])

  return (
    <CustomForm onSubmit={onSubmit}>
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
        <TextFieldGroup mt={3}>
          <Input id="password" type="password" label="Password" register={register} errors={errors} />
          <Input id="confirmPassword" type="password" label="Confirm Password" register={register} errors={errors} />
        </TextFieldGroup>
        <Box mt={3}>
          <Button type="submit" variant="outlined" size="large" sx={{ padding: "10px 40px", fontWeight: 700 }}>Create Account</Button>
        </Box>
      </Box>
    </CustomForm>
  )
}

export default SignUpForm