import { styled, useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PublicIcon from '@mui/icons-material/Public';

import { List, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';

import {DRAWERWIDTH} from '../../types/consts.js';

const openedMixin  = (theme) => ({
  width: DRAWERWIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin  = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));
  
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: DRAWERWIDTH,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      '&>div': {
        background: '#141414'
      },
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
);

const Sidebar = ({open, handleDrawerClose}) => {
  const theme = useTheme();
  const navigate = useNavigate()

  return (
    <Drawer variant="permanent" open={open} className="bg-main" >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon className='color-white-3' /> : <ChevronLeftIcon className='color-white-3' />}
          </IconButton>
        </DrawerHeader>
        <Divider style={{borderColor: "rgba(255, 255, 255, .3)", opacity: open ? 1 : 0}} />
        <List>
            <ListItem key={1} disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/concept') }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <PublicIcon className='color-white-3' />
                </ListItemIcon>
                <ListItemText primary="Concept" className='item-list-menu color-white-3' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
    </Drawer>
  );
}

export default Sidebar