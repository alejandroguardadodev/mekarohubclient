import { TextField, InputAdornment, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const CostumInputStyle = styled(TextField)({
  '& label': {
    color: '#959EB1',
    fontSize: 16,
    fontWeight: 300,
    fontFamily: "'Prompt', sans-serif",
    letterSpacing: 1,
  },
  '& label.Mui-focused': {
    color: '#308C8C',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#308C8C',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#959EB1',
    },
    '&:hover fieldset': {
      borderColor: '#308C8C',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#308C8C',
    },
  },
});


const Input = ({id, label, register, errors, type, className}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const isPassword = type.toLowerCase() === "password"

  return (
    <CostumInputStyle  
        fullWidth 
        id={id} 
        label={label} 
        {...register(id)} 
        error={!!errors[id]} 
        helperText={errors[id] ? errors[id].message : null}
        type={ !isPassword? type : ( showPassword ? 'text' : 'password' ) }
        className={className}
        InputProps={{ 
          endAdornment: isPassword ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityIcon style={{ color: '#959EB1' }} /> : <VisibilityOffIcon style={{ color: '#959EB1' }} />}
              </IconButton>
            </InputAdornment>
          ) : null
        }}
        />
  )
}

Input.defaultProps = {
    type: 'text',
  };
  

export default Input