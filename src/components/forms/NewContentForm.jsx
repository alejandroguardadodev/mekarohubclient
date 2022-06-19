import { NewContentSchemas } from "../../schemas"

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axiosClient from "../../config/axiosClient";
import useClientForm from "../../hooks/useClientForm";

import { Box, Button } from '@mui/material';
import Input from '../controls/Input'

const NewContentForm = () => {
    
    const navigate = useNavigate()
    const { formData, errors, register, setErrorsByErr, onSubmit, showSuccessMessage } = useClientForm(NewContentSchemas, { title: "", description: "" })

    const login = async (_data) => {
        
    }

    useEffect(() => {
        if (formData) login(formData)
    }, [formData])
  return (
    <form onSubmit={onSubmit}>
        <Box mt={3} fullWidth>
            <Input id="title" fullWidth type="text" label="Title" register={register} errors={errors} />
        </Box>
        <Box mt={3}>
            <Input id="description" type="text" label="Description" register={register} errors={errors} multiline={true} rows={4} />
        </Box>
        <Box mt={3} className="flex-row-center">
            <Button type="submit" variant="contained" size="large" sx={{ padding: "10px 40px", fontWeight: 700, width: "100%" }}>Create Content</Button>
        </Box>
    </form>
  )
}

export default NewContentForm