import { Input, InputAdornment  } from '@mui/material';
import { styled } from '@mui/material/styles';

import NearbyErrorIcon from '@mui/icons-material/NearbyError';

const CostumInputStyle = styled(Input)({
  '& input': {
    color: 'var(--color-white-2) !important'
  },
  '&.Mui-error::after': {
    borderBottom: 'solid 1px #d32f2f !important'
  },
  '&.Mui-focused::after': {
    border: 'none'
  },
  '& .MuiInputAdornment-root': {
    color: '#d32f2f !important',
  }
})

const SimpleInput = ({id, label, register, errors, type, className, multiline=false, rows=null, autoFocus=false, inputSize="normal"}) => {

  const isPassword = type.toLowerCase() === "password"
  const hasError = !!errors[id];

  return (
    <>
      <CostumInputStyle 
        fullWidth 
        id={id} 
        placeholder={label} 
        {...register(id)} 
        error={hasError} 
        helpertext={errors[id] ? errors[id].message : null}
        type={ !isPassword? type : ( showPassword ? 'text' : 'password' ) }
        className={`${className}`}
        multiline={multiline}
        rows={rows}
        size={inputSize}
        startAdornment={hasError && (<InputAdornment position="start"><NearbyErrorIcon /></InputAdornment>)}
        autoFocus={autoFocus}
      />
    </>
  )
}

SimpleInput.defaultProps = {
  type: 'text',
};

export default SimpleInput