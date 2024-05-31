import { useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system'
import { useOutletContext } from 'react-router-dom';

import useConcepts from '../hooks/useConcepts';

import ModalNewConcept from '../components/modals/ModalNewConcept';

import BodyPage from '../layouts/contents/BodyPage';
import BodyHeader from '../layouts/contents/BodyHeader';

import ConceptHomeSection from '../components/section/ConceptHomeSection';

import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'

import useMediaQuery from '@mui/material/useMediaQuery'

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

const ButtonContainer = styled(Box)(() => ({
  '& > :not(style)': { m: 1 },
  position: 'absolute',
  bottom: '15px',
  right: '15px',
}))

const Concept = () => {

  const theme = useTheme();
  const { concepts, loadConcepts } = useConcepts()
    const [currentItem, innerContainerWidth] = useOutletContext();

    const [modalTitleValue, setModalTitleValue] = useState(null)

    const [showNewContentModal, setShowNewContentModal] = useState(false)
    const openNewConentModal = (title) => {
      setShowNewContentModal(true);
      setModalTitleValue(title)
    }
    const closeNewContentModal = () => setShowNewContentModal(false);

    const [showNewConceptRow, setShowNewConceptRow] = useState(false)
    const openNewConceptRow = () => setShowNewConceptRow(true);
    const closeNewConceptRow = () => setShowNewConceptRow(false);
    
    useEffect(() => {
      loadConcepts()
    }, [])
    
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BodyPage>
      <BodyHeader item={currentItem}>
        {!isMobile && (<Button variant="text" sx={{ fontWeight: 400, }} startIcon={<AddIcon />} className="capitalize" onClick={openNewConceptRow}> Add Item </Button>)}
      </BodyHeader>

      <ConceptHomeSection concepts={concepts} width={innerContainerWidth} showNewConceptRow={showNewConceptRow} openNewConentModal={openNewConentModal} closeNewConceptRow={closeNewConceptRow}/>

      <ModalNewConcept modalTitleValue={modalTitleValue} open={showNewContentModal} handleClose={closeNewContentModal}/>

      {isMobile && (<ButtonContainer>
        <Fab color="primary" aria-label="add" onClick={() => { openNewConentModal('') }}>
          <AddIcon />
        </Fab>
      </ButtonContainer>)}
    </BodyPage>
  )
}

export default Concept