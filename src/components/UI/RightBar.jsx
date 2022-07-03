import { styled, useTheme } from '@mui/material/styles';
import { useNavigate, useLocation  } from 'react-router-dom';
import { useEffect } from 'react';

import { Box, Typography, IconButton, Divider } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';

import useRightBar from '../../hooks/useRightBar';

import ConceptCard from '../elements/concepts/ConceptCard';

import ClearAllIcon from '@mui/icons-material/ClearAll';

const openElement  = (theme, width) => ({
    width: width,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});
  

const closeElement  = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(0)})`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(0)})`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open, width }) => ({
      width: width,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      background: '#242424',
      '&>div': {
        paddingTop: '43px !important',
        paddingLeft: '7px !important',
        paddingRight: '14px !important',
        background: '#242424',
        ...(open && {
            visibility: 'visible !important',
            transform: 'none !important'
        })
      },
      ...(open && {
        ...openElement(theme, width),
        '& .MuiDrawer-paper': openElement(theme, width),
      }),
      ...(!open && {
        ...closeElement(theme),
        '& .MuiDrawer-paper': closeElement(theme),
      }),
    }),
);
  

const RightBar = ({open}) => {

    const { rightbarWidth, data, toShow, closeRightBar } = useRightBar()

    const location = useLocation();

    useEffect(() => {
        if (open) closeRightBar()
    }, [location]);

    const render = () => {
        switch (toShow) {
            case 'ConceptInfo':
                return <ConceptCard data={data} />
        }
    }

  return (
    <Drawer variant="persistent" anchor='right' open={open} width={rightbarWidth}>
        <Box className='flex-row-end pt-2'>
            <IconButton onClick={closeRightBar}>
                <ClearAllIcon className='color-white-3' fontSize='normal' />
            </IconButton>
        </Box>
        <Divider style={{borderColor: "rgba(255, 255, 255, .3)", opacity: open ? 1 : 0, marginBottom: '30px'}} />
        {toShow && render()}
    </Drawer>
  )
}

export default RightBar