import useRow from "../../../hooks/useRow";
import { formatDate } from '../../../helper'

import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import MKTableRow from "../../UI/table/MKTableRow"
import { TableCell } from '@mui/material'

const ConceptRow = ({index, id, item, register}) => {
    
    const { title, owner: username, createdAt, isCreator } = item;
    const { dropRef, dragRef, rowOpacity, handlerId } = useRow({register, id, index})

  return (
    <MKTableRow id={id} dropRef={dropRef} opacity={rowOpacity} handlerId={handlerId}>
        <TableCell ref={dragRef} align="left" className="color-white-2" sx={{ width: "2%" }}>
          <DragIndicatorIcon />
        </TableCell>
        
        <TableCell component="th" scope="row" className="color-white-2" sx={{width: "50%"}}>
          {title}
        </TableCell>
        <TableCell align="left" className={`${isCreator && 'highlight'}`}>@{username}</TableCell>
        <TableCell align="left" className="color-white-2">{formatDate(createdAt)}</TableCell>
    </MKTableRow>
  )
}

export default ConceptRow