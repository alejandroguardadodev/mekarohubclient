import { NewPasswordSchemas } from "../../schemas"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

import axiosClient from "../../config/axiosClient"
import useClientForm from "../../hooks/useClientForm"

import { Box, Button } from "@mui/material"
import Input from "../controls/Input"

const NewPasswordForm = ({token}) => {
  const navigate = useNavigate()

  const { formData, errors, register, setErrorsByErr, onSubmit, showSuccessMessage } = useClientForm(NewPasswordSchemas, { password: "", confirmPassword: "" })

  const newPassword = async (_data) => {
    try {
      const { data } = await axiosClient.post(`/users/reset-password/${token}`, _data)
      showSuccessMessage(data.msg)
      navigate('/')
    } catch (err) {
      setErrorsByErr(err)
    }
  }

  useEffect(() => {
    if (formData) newPassword(formData)
  }, [formData])

  return (
    <form onSubmit={onSubmit}>
      <Box mt={3}>
        <Input id="password" type="password" label="New Password" register={register} errors={errors} />
      </Box>
      <Box mt={3}>
        <Input id="confirmPassword" type="password" label="Confirm New Password" register={register} errors={errors} />
      </Box>
      <Box mt={3} className="flex-row-center">
        <Button type="submit" variant="outlined" size="large" fullWidth sx={{ padding: "10px 40px", fontWeight: 700 }}>Save Password</Button>
      </Box>
    </form>
  )
}

export default NewPasswordForm