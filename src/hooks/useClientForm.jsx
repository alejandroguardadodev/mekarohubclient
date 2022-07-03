import { ERROR_TYPE_FIELDS } from "../types";

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";

import { createToast, updateToastError, updateToastSuccess } from "../helper/toastHelper";

const useClientForm = (customSchema, defaultValues, isAsync = true) => {
    const [data, setData] = useState(null)
    const [toastId, setToastId] = useState(null)
    const { register, setError, handleSubmit, clearErrors, reset, formState: {errors}, getValues, setValue } = useForm({ resolver: yupResolver(customSchema), mode: "onChange" })

    const resetValues = () => {
        reset(defaultValues, {
            keepErrors: false, 
            keepDirty: false,
            keepIsSubmitted: false,
            keepTouched: false,
            keepIsValid: false,
            keepSubmitCount: false,
          })
        clearErrors()
    }

    const showSuccessMessage = (msg) => {
        if (toastId) updateToastSuccess(toastId, msg)
        
        resetValues()
    }
    
    const setErrorsByFields = (fields) => {
        for (const key in fields) {
            const message = fields[key]

            setError(key, { type: 'custom', message });
        }
    }

    const setErrorsByErr = (err) => {
        if (err?.response) {
            const { data } = err.response;
    
            if (data?.errType === ERROR_TYPE_FIELDS) setErrorsByFields(data.fields)
            
            if (toastId) updateToastError(toastId, data.errMsg)
        }
    }

    const onSubmit = async (formData) => {
        if (isAsync) {
            const _id = createToast("Receiving Data...")
            setToastId(_id)
        }
        
        setData(formData)
    }

    return {
        formData: data,
        errors,
        register,
        resetValues,
        setErrorsByFields,
        setErrorsByErr,
        onSubmit: handleSubmit(onSubmit),
        showSuccessMessage,
        getValues,
        setValue
    }
}

export default useClientForm