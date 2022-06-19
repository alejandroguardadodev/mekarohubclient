import { Modal, Typography, Backdrop, Box  } from "@mui/material"
import { styled } from '@mui/material/styles';

import NewContentForm from "../forms/NewContentForm";

const MainBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    left: '50%',
    width: '80%',
    maxWidth: 600,
    transform: 'translate(-50%, 50%)',
    background: '#07070D',
    padding: "20px",
    animation: 'showUp .25s forwards',
    borderRadius: '10px',
    border: 'solid 2px #5EBFB5',
}))

const ModalNewConcept = ({open, handleClose}) => {
    
  return (
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    
      <MainBox open={open}>
        <Typography id="transition-modal-title" variant="h3" className="color-main capitalize text-center">
          Create new concept
        </Typography>
        <Box id="transition-modal-description" sx={{ mt: 2, width: '100%' }}>
          <NewContentForm />
        </Box>
      </MainBox>
  </Modal>
  )
}

export default ModalNewConcept