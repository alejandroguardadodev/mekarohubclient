import { useState } from 'react'
import { useOutletContext } from 'react-router-dom';

import PublicIcon from '@mui/icons-material/Public';
import AddIcon from '@mui/icons-material/Add';

import { Box, Typography, Button } from '@mui/material'

import ModalNewConcept from '../components/modals/ModalNewConcept';

import ConceptGrid from '../components/elements/ConceptGrid';

const Concept = () => {
    const [showNewContentModal, setShowNewContentModal] = useState(false)
    const [containerRef] = useOutletContext();

    const openNewConentModal = () => setShowNewContentModal(true);
    const closeNewContentModal = () => setShowNewContentModal(false);
    
  return (
    <>
        <Box fullwidth sx={{ display: 'flex', alignItems: 'center' }} mb={5}>
            <PublicIcon className='color-main' fontSize='medium' />
            <Typography ml={1} className='color-main' variant='h4'> Concept </Typography>
            <Button variant="outlined" sx={{ marginLeft: 'auto' }} startIcon={<AddIcon />} onClick={openNewConentModal}> Create </Button>
        </Box>

        <ConceptGrid />

        <ModalNewConcept open={showNewContentModal} handleClose={closeNewContentModal} containerRef={containerRef}/>
    </>
  )
}

export default Concept