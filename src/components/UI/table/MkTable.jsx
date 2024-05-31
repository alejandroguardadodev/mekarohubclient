import {useState, useCallback, useRef, useEffect} from 'react'

import useClickOutside from '../../../hooks/useClickOutside'

import { TableContainer, Paper, Table, TableBody, TableHead, TableRow, TableCell, colors  } from '@mui/material'

const tableStyle = {
  '&.theme-white .MuiTableHead-root': {
    '& td, & th': {
      borderColor: "rgba(255,255,255,.5)",
      color: "var(--color-white-2) !important"
    },
  },
  '&.theme-white .MuiTableRow-root': {
    '& td.sub-menu button, & th.sub-menu button': {
      lineHeight: 1.43,
      fontSize: "15px !important",
      fontWeight: 300,
      fontFamily: "'Poppins',sans-serif",
    },
    '& td.highlight, & th.highlight': {
      color: "var(--color-primary) !important"
    },
    '& td, & th': {
      borderColor: "rgba(255,255,255,.25)",
      color: "var(--color-white-2) !important"
    },
  }
}

const MkTable = ({width, theme, register, renderRow, renderNewRow, draggable=false, showNewRow=false, hideNewRow}) => {
  const {columns, rows} = register()
  const { elementOutsideRef: tableRef } = useClickOutside(() => hideNewRow())

  const renderRowByItem = useCallback((row, index) => {
    return renderRow(row, index);
  }, [])

  return (
    <TableContainer ref={tableRef} component={Paper} style={{background: "transparent", borderRadius: "0"}}>
      <Table style={{ width: `${width} px` }} sx={tableStyle} className={`theme-${theme? theme : 'normal'}`} size="small">
        <TableHead>
          <TableRow>
            {columns.map((column, index) => 
              (index <= 0)?
                <TableCell key={index} component="th" scope="row" colSpan={ draggable? 2 : 1 }>{column}</TableCell> :
                <TableCell key={index}>{column}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {showNewRow && renderNewRow && renderNewRow()}
          {rows.map((row, i) => renderRowByItem(row, i))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MkTable