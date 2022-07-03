import useConcepts from '../../../hooks/useConcepts'
import useTable from '../../../hooks/useTable'

import MkTable from '../../UI/table/MkTable'
import ConceptRow from './ConceptRow'
import NewConceptRow from './NewConceptRow'

const columnsBase = ["Concept", "Owner", "Created At"]

const ConceptsTable = ({width, concepts, showNewConceptRow, closeNewConceptRow, openNewConentModal}) => {

  const { reorderConcept } = useConcepts()

  const { rowRegister, tableRegister} = useTable({
    data: concepts,
    columns: columnsBase,
    onUpdate: (data) => {
      const concepts = data.map((concept, index) => ({
        id: concept._id,
        order: index
      }))

      reorderConcept(concepts)
    }
  })

  const renderRow = (row, index) => {
    return (
      <ConceptRow
        key={row._id}
        index={index}
        id={row._id}
        item={row}
        register={rowRegister}
      />
    )
  }

  const renderNewRow = () => (<NewConceptRow closeNewConceptRow={closeNewConceptRow} openNewConentModal={openNewConentModal} />)

  return (
    <MkTable width={width} register={tableRegister} renderRow={renderRow} renderNewRow={renderNewRow} showNewRow={showNewConceptRow} hideNewRow={closeNewConceptRow} theme="white" draggable />
  )
}

export default ConceptsTable