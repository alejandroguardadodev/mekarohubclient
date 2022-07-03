import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ConceptsTable from '../elements/concepts/ConceptsTable'

const ConceptHomeSection = ({concepts, width, showNewConceptRow, closeNewConceptRow, openNewConentModal}) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ConceptsTable concepts={concepts} width={width} showNewConceptRow={showNewConceptRow} openNewConentModal={openNewConentModal} closeNewConceptRow={closeNewConceptRow} />
    </DndProvider>
  )
}

export default ConceptHomeSection