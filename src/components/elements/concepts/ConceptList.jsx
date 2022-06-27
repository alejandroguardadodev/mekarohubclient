import update from 'immutability-helper' 
import {useState, useCallback, useEffect} from 'react'

import { TableContainer, Paper, Table, TableBody, TableHead, TableRow, TableCell  } from '@mui/material'

import ConceptCard from './ConceptCard'

const ConceptList = ({width, concepts}) => {

    const [items, setItems] = useState([...concepts]);

    let prevItems = null;
    
    const startDragHandle = () => {
      setItems((prevCards) => {
        prevItems = prevCards
        return prevCards
      })
    }
    
    useEffect(() => {
        setItems([...concepts])
        
    }, [concepts])

    const moveItem = useCallback((dragIndex, hoverIndex) => {
        setItems((prevCards) => {
          // console.log("prevCards", prevCards)
          const value = update(prevCards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, prevCards[dragIndex]],
            ],
          })
          // console.log("value", value)
          return value;
          }
        )
    }, [])

    const renderConcept = useCallback((concept, index) => {
        
        return (
          <ConceptCard
            key={concept._id}
            index={index}
            id={concept._id}
            concept={concept}
            moveItem={moveItem}
            startDrag={startDragHandle}
            prevItems={prevItems}
          />
        )
    }, [])

  return (
    <TableContainer component={Paper} style={{background: "transparent", borderRadius: "0"}}>
      <Table aria-label="Concepts" style={{ width: `${width} px` }} size="small" >
        <TableHead>
          <TableRow sx={{'& td, & th': { borderColor: "rgba(255,255,255,.5)" },}}>
            <TableCell component="th" scope="row" colSpan={2} className='color-white-2'>Concept</TableCell>
            <TableCell className='color-white-2'>Owner</TableCell>
            <TableCell className='color-white-2'>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {items.map((item, i) => renderConcept(item, i))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ConceptList