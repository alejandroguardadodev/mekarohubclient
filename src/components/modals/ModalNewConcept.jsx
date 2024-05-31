import { Modal, Typography, Backdrop, Box  } from "@mui/material"
import { styled } from '@mui/material/styles';

import NewConceptForm from "../forms/NewConceptForm";

const MainBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    left: '50%',
    width: '80%',
    maxWidth: 600,
    transform: 'translate(-50%, 50%)',
    background: '#141414',
    padding: "20px",
    animation: 'showUp .25s forwards',
    borderRadius: '10px',
    boxShadow: '0px 10px 20px -8px rgba(0,0,0,0.6)',
}))

const ModalNewConcept = ({open, handleClose, modalTitleValue}) => {
    
  return (
    <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500, }}
    >
      <MainBox open={open}>
        <Typography id="transition-modal-title" variant="h3" className="color-main capitalize" sx={{ fontWeight: 500, fontSize: 20}}>
          Register Item
        </Typography>
        <Box id="transition-modal-description" sx={{ mt: 2, width: '100%' }}>
          <NewConceptForm modalTitleValue={modalTitleValue} closeModal={handleClose} />
        </Box>
      </MainBox>
  </Modal>
  )
}

export default ModalNewConcept