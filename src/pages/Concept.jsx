import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';

import useConcepts from '../hooks/useConcepts';

import ModalNewConcept from '../components/modals/ModalNewConcept';

import BodyPage from '../layouts/contents/BodyPage';
import BodyHeader from '../layouts/contents/BodyHeader';

import ConceptHomeSection from '../components/section/ConceptHomeSection';

import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material'

const Concept = () => {

  const { concepts, loadConcepts } = useConcepts()

    const [showNewContentModal, setShowNewContentModal] = useState(false)
    const [currentItem, innerContainerWidth] = useOutletContext();

    const openNewConentModal = () => setShowNewContentModal(true);
    const closeNewContentModal = () => setShowNewContentModal(false);
    
    useEffect(() => {
      loadConcepts()
    }, [])
    
  return (
    <BodyPage>
      <BodyHeader item={currentItem}>
        <Button variant="text" sx={{ fontWeight: 400, }} startIcon={<AddIcon />} className="capitalize" onClick={openNewConentModal}> New Concept </Button>
      </BodyHeader>

      <ConceptHomeSection concepts={concepts} width={innerContainerWidth}/>

      <ModalNewConcept open={showNewContentModal} handleClose={closeNewContentModal}/>
    </BodyPage>
  )
}

export default Concept