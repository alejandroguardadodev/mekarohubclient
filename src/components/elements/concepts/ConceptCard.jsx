import { useRef, useState, useEffect } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import { TableRow, TableCell } from '@mui/material'

import { formatDate } from '../../../helper'

import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'transparent',
    cursor: 'move',
    margin: "opx !important"
}

const ConceptCard = ({id, concept, index, moveItem, startDrag, prevItems, onUpdate}) => {
    const dropRef = useRef(null)
    const dragRef = useRef(null)

    const { title, owner: username, createdAt, isCreator } = concept;

    const updateOrder = (prev, current) => {
      console.log({prev, current})
    }

    const handleClick = (e) => {
      switch (e.detail) {
        case 1:
          console.log("click");
          break;
        case 2:
          console.log("double click");
          break;
        case 3:
          console.log("triple click");
          break;
        default:
          return;
      }
    };

    const [{ handlerId }, drop] = useDrop({
        accept: 'box',
        collect(monitor) {
          return {
            handlerId: monitor.getHandlerId(),
          }
        },
        drop: (item, monitor) => {
          if (prevItems) {
            const prevId = prevItems[index]._id;
            const currentId = id;
            onUpdate()
            //if (prevId !== currentId) updateOrder(prevId, currentId)
          }
        },
        hover(item, monitor) {
          if (!dropRef.current) return
          const dragIndex = item.index
          const hoverIndex = index
          if (dragIndex === hoverIndex) return;
          // Determine rectangle on screen
          const hoverBoundingRect = dropRef.current?.getBoundingClientRect()
          // Get vertical middle
          const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
          // Determine mouse position
          const clientOffset = monitor.getClientOffset()
          // Get pixels to the top
          const hoverClientY = clientOffset.y - hoverBoundingRect.top
          // Only perform the move when the mouse has crossed half of the items height
          // When dragging downwards, only move when the cursor is below 50%
          // When dragging upwards, only move when the cursor is above 50%
          // Dragging downwards
          if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
          }
          // Dragging upwards
          if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
          }
          
          // Time to actually perform the action
          moveItem(dragIndex, hoverIndex)
          // Note: we're mutating the monitor item here!
          // Generally it's better to avoid mutations,
          // but it's good here for the sake of performance
          // to avoid expensive index searches.
          item.index = hoverIndex
        },
      })

      const [{ isDragging }, drag, preview] = useDrag({
        type: 'box',
        item: () => {
          startDrag()
          return { id, index }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => {
        },
      })

      const opacity = isDragging ? 0 : 1

      drag(dragRef)
      drop(preview(dropRef))

    return (
      <TableRow ref={dropRef} style={{ opacity }} data-handler-id={handlerId} sx={{  '& td, & th': { borderColor: "rgba(255,255,255,.25)" }, '&:last-child td, &:last-child th': { border: 0 }, "&:hover": { background: "rgba(255,255,255,.1)" }, cursor: 'pointer' }}>
        <TableCell ref={dragRef} align="left" className="color-white-2" sx={{ width: "2%" }}>
          <DragIndicatorIcon />
        </TableCell>
        
        <TableCell onClick={handleClick} component="th" scope="row" className="color-white-2" sx={{width: "50%"}}>
          {title}
        </TableCell>
        <TableCell align="left" className={`${isCreator? 'color-primary-important' : 'color-white-2'}`}>@{username}</TableCell>
        <TableCell align="left" className="color-white-2">{formatDate(createdAt)}</TableCell>
      </TableRow>
    )
}

export default ConceptCard