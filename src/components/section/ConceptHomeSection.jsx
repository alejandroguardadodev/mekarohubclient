import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ConceptList from '../elements/concepts/ConceptList'

const ConceptHomeSection = ({concepts, width}) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ConceptList concepts={concepts} width={width} />
    </DndProvider>
  )
}

export default ConceptHomeSection