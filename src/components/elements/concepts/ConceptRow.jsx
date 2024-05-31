import {useNavigate} from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'
import useRightBar from '../../../hooks/useRightBar';
import useRow from "../../../hooks/useRow";
import { formatDate } from '../../../helper'

import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import MKTableRow from "../../UI/table/MKTableRow"
import { TableCell, Typography } from '@mui/material'

import SubMenu from "../../UI/SubMenu";

const ConceptRow = ({index, id, item, register}) => {
    
    const { title, owner: username, createdAt, isCreator } = item;
    const { dropRef, dragRef, rowOpacity, handlerId } = useRow({register, id, index})

    const { showRightBar } = useRightBar()

    const navigate = useNavigate()

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const subMenuItems = [
        {
            id: 0,
            title: (isCreator? 'Go To My Profile': 'Visit Profile'),
            click: () => { navigate('/my-profile') }
        }
    ]

    const handleClick = (e) => {
        switch (e.detail) {
          case 2:
            showRightBar({width: 300, data: item, toShow: 'ConceptInfo'})
            break;
        }
      };

  return (
    <MKTableRow id={id} dropRef={dropRef} opacity={rowOpacity} handlerId={handlerId}>
        <TableCell ref={dragRef} align="left" className="color-white-2" sx={{ width: "2%" }}>
          <DragIndicatorIcon />
        </TableCell>
        
        <TableCell onClick={handleClick} component="th" scope="row" className="color-white-2" sx={{width: "50%"}}>
          {title}
        </TableCell>
        {!isMobile && (<>
          <TableCell align="left" className={`${isCreator && 'highlight'} sub-menu`}>
            <SubMenu id={`sub-menu-${title}`} icon={<span>@{username}</span>} items={subMenuItems}/>
          </TableCell>
          <TableCell align="left" className="color-white-2">{formatDate(createdAt)}</TableCell>
        </>)}
        
    </MKTableRow>
  )
}

export default ConceptRow