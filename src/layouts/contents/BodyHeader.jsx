import { Box, Typography } from '@mui/material'

const BodyHeader = ({children, item}) => {
    
  return (
    <Box fullwidth sx={{ display: 'flex', alignItems: 'center' }} mb={2}>
        {item.icon && <item.icon className='color-main' fontSize='medium' /> }
        <Typography ml={1} className='color-main' variant='h4'> {item.title} </Typography>

        <Box sx={{marginLeft: 'auto'}}>
            {children}
        </Box>
    </Box>
  )
}

export default BodyHeader