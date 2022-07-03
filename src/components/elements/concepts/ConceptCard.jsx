import {TextField, Box} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';


const CssTextField = styled(TextField)({
  '&.no-border .MuiInput-root::after, .MuiInput-root::before': {
    border: "none !important"
  },
  '& label': {
    color: '#308C8C',
    fontSize: 16,
    fontWeight: 300,
    fontFamily: "'Prompt', sans-serif",
    letterSpacing: 1,
  },
  '& label.hide-label': {
    display: 'none !important',
    opacity: '0 !important'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#308C8C',
  },
  '& .MuiOutlinedInput-root': {
    
    '&:hover fieldset': {
      borderColor: '#308C8C',
    },
    '& fieldset': {
      borderColor: '#308C8C',
    },
  },
  '& input, & textarea': {
    color: "var(--color-white-3) !important",
  }
});

const ConceptCard = ({data}) => {

  const {title, description} = data;
  const [myDescription, setMyDescription] = useState("")

  useEffect(() => {
    setMyDescription(data.description? data.description : "N/A")
  }, [data])

    return (
      <>
        <Box className='w-100'>
          <CssTextField
            id="title-read-only"
            label="Concept Title"
            value={title}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Box>

        <Box className='w-100' mt={4}>
          <CssTextField
            id="description-read-only"
            label="Concept Description"
            value={myDescription}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            multiline
            rows={4}
          />
        </Box>
      </>
    )
}

export default ConceptCard