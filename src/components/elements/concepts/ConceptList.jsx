import update from 'immutability-helper' 
import {useState, useCallback, useEffect} from 'react'

import ConceptCard from './ConceptCard'

const ConceptList = ({width, concepts}) => {

    const [items, setItems] = useState([...concepts]);
    
    useEffect(() => {
        setItems([...concepts])

        console.log('UPDATE')
    }, [concepts])

    const moveItem = useCallback((dragIndex, hoverIndex) => {
        setItems((prevCards) =>
          update(prevCards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, prevCards[dragIndex]],
            ],
          }),
        )
    }, [])

    const renderConcept = useCallback((concept, index) => {
        return (
          <ConceptCard
            key={concept._id}
            index={index}
            id={concept._id}
            text={concept.title}
            moveItem={moveItem}
          />
        )
    }, [])

  return (
    <>
        <div style={{ width: `${width} px` }}>
            {items.map((item, i) => renderConcept(item, i))}
        </div>
    </>
  )
}

export default ConceptList