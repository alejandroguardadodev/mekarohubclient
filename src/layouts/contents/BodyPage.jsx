import AddIcon from '@mui/icons-material/Add';

import { Box, Typography, Button } from '@mui/material'

const BodyPage = ({children, item, buttonTitle=null, onClickButton}) => {
  return (
    <>
        <Box fullwidth sx={{ display: 'flex', alignItems: 'center' }} mb={2}>
            {item.icon && <item.icon className='color-main' fontSize='medium' /> }
            <Typography ml={1} className='color-main' variant='h4'> {item.title} </Typography>

            {
                buttonTitle && <Button variant="outlined" sx={{ marginLeft: 'auto' }} startIcon={<AddIcon />} onClick={onClickButton}> {buttonTitle} </Button>
            }
        </Box>

        {children}
    </>
  )
}

export default BodyPage