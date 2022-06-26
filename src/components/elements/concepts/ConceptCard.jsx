import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import { TableRow, TableCell } from '@mui/material'

import { formatDate } from '../../../helper'

import HighlightAltIcon from '@mui/icons-material/HighlightAlt';

import useAuth from '../../../hooks/useAuth';

const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'transparent',
    cursor: 'move',
    margin: "opx !important"
}

const ConceptCard = ({id, concept, index, moveItem}) => {
    const ref = useRef(null)

    const { user } = useAuth()

    const { title, owner: {_id, username}, createdAt } = concept;

    const isOwner = user._id === _id;

    const [{ handlerId }, drop] = useDrop({
        accept: 'card',

        collect(monitor) {
          return {
            handlerId: monitor.getHandlerId(),
          }
        },

        hover(item, monitor) {
          if (!ref.current) return
          
          const dragIndex = item.index
          const hoverIndex = index
          // Don't replace items with themselves
          if (dragIndex === hoverIndex) {
            return
          }
          // Determine rectangle on screen
          const hoverBoundingRect = ref.current?.getBoundingClientRect()
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

      const [{ isDragging }, drag] = useDrag({
        type: 'card',
        item: () => {
          return { id, index }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      })

      const opacity = isDragging ? 0 : 1

      drag(drop(ref))

    return (
      <TableRow ref={ref} style={{ opacity }} data-handler-id={handlerId} sx={{  '& td, & th': { borderColor: "rgba(255,255,255,.25)" }, '&:last-child td, &:last-child th': { border: 0 }, "&:hover": { background: "rgba(255,255,255,.1)" }, cursor: 'pointer' }}>
        <TableCell align="left" className="color-white-2" sx={{ width: "2%" }}><HighlightAltIcon /></TableCell>
        <TableCell component="th" scope="row" className="color-white-2" sx={{width: "50%"}}>
          {title}
        </TableCell>
        <TableCell align="left" className={`${isOwner? 'color-primary-important' : 'color-white-2'}`}>@{username}</TableCell>
        <TableCell align="left" className="color-white-2">{formatDate(createdAt)}</TableCell>
      </TableRow>
    )
}

export default ConceptCard