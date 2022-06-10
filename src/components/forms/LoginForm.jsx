import { LoginSchemas } from "../../schemas"

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axiosClient from "../../config/axiosClient";
import useClientForm from "../../hooks/useClientForm";

import { Box, Button } from '@mui/material';
import { TextFieldGroup } from "../../designs"
import Input from '../controls/Input'

const LoginForm = () => {
    
    const navigate = useNavigate()
    const { formData, errors, register, setErrorsByErr, onSubmit, showSuccessMessage } = useClientForm(LoginSchemas, { entity: "", password: "" })

    const login = async (formData) => {
        try {
            const { data } = await axiosClient.post('/users/login', formData)
        
            showSuccessMessage(data.msg)
        } catch (err) {
            setErrorsByErr(err)
        }
    }

    useEffect(() => {
        if (formData) login(formData)
    }, [formData])
  return (
    <form onSubmit={onSubmit}>
        <Box mt={3} fullWidth>
            <Input id="entity" fullWidth type="text" label="Email or Username" register={register} errors={errors} />
        </Box>
        <Box mt={3}>
            <Input id="password" type="password" label="Password" register={register} errors={errors} />
        </Box>
        <Box mt={3} className="flex-row-center">
            <Button type="submit" variant="outlined" size="large" sx={{ padding: "10px 40px", fontWeight: 700 }}>Login</Button>
        </Box>
    </form>
  )
}

export default LoginForm