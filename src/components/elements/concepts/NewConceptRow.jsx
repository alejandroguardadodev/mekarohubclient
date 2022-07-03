import { useEffect } from 'react'

import { TableRow, TableCell, IconButton, Box } from '@mui/material'
import SimpleInput from '../../controls/SimpleInput'
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

import useClientForm from '../../../hooks/useClientForm'
import useConcepts from "../../../hooks/useConcepts";
import useAuth from '../../../hooks/useAuth'

import { NewContentRowSchemas } from '../../../schemas'


const NewConceptRow = ({closeNewConceptRow, openNewConentModal}) => {
    const { formData, errors, register, setErrorsByErr, onSubmit, showSuccessMessage, getValues } = useClientForm(NewContentRowSchemas, { title: "" })

    const {user: { username }} = useAuth()
    const { saveConcept } = useConcepts()

    const createConcept = async (_data) => {
        const data = await saveConcept(_data)
        if (data.err) return setErrorsByErr(data.err)
        showSuccessMessage(data.msg)
        closeNewConceptRow()
    }

    const expandRow = () => {
        const title = getValues('title')
        closeNewConceptRow()
        openNewConentModal(title)
    }

    useEffect(() => {
        if (formData) createConcept(formData)
    }, [formData])

  return (
    <TableRow sx={{ cursor: 'pointer' }}>
        <TableCell component="th" scope="row" colSpan={2} className='color-white-2'>
            <form onSubmit={onSubmit}>
                <SimpleInput id="title" fullWidth type="text" label="Concept's Title" autoFocus register={register} errors={errors} inputType="standard" inputSize="small" hideLabel={true} className="no-border c-white-2"  />
            </form>
        </TableCell>
        <TableCell className='highlight'>@{username}</TableCell>
        <TableCell className='color-white-2'>
            <Box fullWidth className='flex-row-between'>
                <p>
                    Today
                </p>

                <IconButton onClick={expandRow}>
                    <OpenInFullIcon className='color-primary-important' />
                </IconButton>
            </Box>
        </TableCell>
    </TableRow>
  )
}

export default NewConceptRow