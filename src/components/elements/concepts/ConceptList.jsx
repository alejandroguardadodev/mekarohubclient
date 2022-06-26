import update from 'immutability-helper' 
import {useState, useCallback, useEffect} from 'react'

import { TableContainer, Paper, Table, TableBody, TableHead, TableRow, TableCell  } from '@mui/material'

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
            concept={concept}
            moveItem={moveItem}
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