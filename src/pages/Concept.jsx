import { useState } from 'react'
import { useOutletContext } from 'react-router-dom';

import PublicIcon from '@mui/icons-material/Public';


import { Box, Typography, Button } from '@mui/material'

import ModalNewConcept from '../components/modals/ModalNewConcept';

import BodyPage from '../layouts/contents/BodyPage';
import ConceptGrid from '../components/elements/ConceptGrid';

const Concept = () => {
    const [showNewContentModal, setShowNewContentModal] = useState(false)
    const [containerRef, currentItem] = useOutletContext();

    const openNewConentModal = () => setShowNewContentModal(true);
    const closeNewContentModal = () => setShowNewContentModal(false);
    
  return (
    <BodyPage 
      item={currentItem}
       
       buttonTitle="Create" 
       onClickButton={openNewConentModal}
    >
      <ConceptGrid />
      <ModalNewConcept open={showNewContentModal} handleClose={closeNewContentModal} containerRef={containerRef}/>
    </BodyPage>
  )
}

export default Concept