import { useDrag, useDrop } from 'react-dnd'
import { useRef, useState, useEffect } from 'react'

const useRow = ({register, id, index}) => {
    const dropRef = useRef(null) // Drop Reference
    const dragRef = useRef(null) // Drap Refetence

    const { fireUpdate, move } = register()

    const [{ handlerId }, drop] = useDrop({
        accept: 'box',
        collect(monitor) {
          return { handlerId: monitor.getHandlerId(), }
        },
        drop: (item, monitor) => {
            fireUpdate()
        },
        hover(item, monitor) {
          if (!dropRef.current) return
          const dragIndex = item.index
          const hoverIndex = index
          if (dragIndex === hoverIndex) return;
          const hoverBoundingRect = dropRef.current?.getBoundingClientRect()
          const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
          const clientOffset = monitor.getClientOffset()
          const hoverClientY = clientOffset.y - hoverBoundingRect.top
          if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) { return }
          if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) { return }
          move(dragIndex, hoverIndex)
          item.index = hoverIndex
        },
    })

    const [{ isDragging }, drag, preview] = useDrag({
        type: 'box',
        item: () => {
          return { id, index }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => { },
    })

    const opacity = isDragging ? 0 : 1

    drag(dragRef)
    drop(preview(dropRef))

    return {
        dropRef,
        dragRef,
        rowOpacity: opacity,
        handlerId
    }
}

export default useRow