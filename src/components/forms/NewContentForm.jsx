import { NewContentSchemas } from "../../schemas"

import { useEffect } from "react";

import useConcepts from "../../hooks/useConcepts";

import axiosClient from "../../config/axiosClient";
import useClientForm from "../../hooks/useClientForm";

import { Box, Button } from '@mui/material';
import Input from '../controls/Input'

const NewContentForm = ({closeModal}) => {
    
    const { formData, errors, register, setErrorsByErr, onSubmit, showSuccessMessage } = useClientForm(NewContentSchemas, { title: "", description: "" })
    const { saveConcept } = useConcepts()

    const createConcept = async (_data) => {
        const data = await saveConcept(_data)

        if (data.err) return setErrorsByErr(data.err)
        showSuccessMessage(data.msg)
        closeModal()
    }

    useEffect(() => {
        if (formData) createConcept(formData)
    }, [formData])
  return (
    <form onSubmit={onSubmit}>
        <Box mt={3} fullWidth>
            <Input id="title" fullWidth type="text" label="Title" register={register} errors={errors} />
        </Box>
        <Box mt={3}>
            <Input id="description" type="text" label="Description" register={register} errors={errors} multiline={true} rows={4} />
        </Box>
        <Box mt={3} className="flex-row-end">
            <Button type="submit" variant="contained" size="large" sx={{ padding: "10px 40px", fontWeight: 600, fontSize: 15 }}>Create Content</Button>
        </Box>
    </form>
  )
}

export default NewContentForm