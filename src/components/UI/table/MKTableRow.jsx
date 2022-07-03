import React from 'react'

import { TableRow } from '@mui/material'

const MKTableRow = ({children, opacity, dropRef, handlerId, id}) => {
  return (
    <TableRow key={id} ref={dropRef} style={{ opacity }} data-handler-id={handlerId} sx={{  '&:last-child td, &:last-child th': { border: 0 }, "&:hover": { background: "rgba(255,255,255,.1)" }, cursor: 'pointer' }}>
        {children}
    </TableRow>
  )
}

export default MKTableRow