import { styled, useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PublicIcon from '@mui/icons-material/Public';

import { List, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';

import { DRAWERWIDTH, MENUITEMS } from '../../types/consts.js';

import useMediaQuery from '@mui/material/useMediaQuery';

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

const closedMixinPhone  = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `0px !important`,
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));
  
const ShadowBox = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,.5)',
  zIndex: 9999,
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: DRAWERWIDTH,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      '&>div': {
        background: '#242424'
      },
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
      [theme.breakpoints.down('lg')]: {
        position: 'absolute',
        zIndex: 99999,
        ...(!open && {
          ...closedMixinPhone(theme),
          '& .MuiDrawer-paper': closedMixinPhone(theme),
        }),
      }
    }),
);

const Sidebar = ({open, handleDrawerClose, selectItem}) => {
  const theme = useTheme();
  const navigate = useNavigate()


  const showShadow = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <Drawer variant="permanent" open={open} className="bg-main" >
        <DrawerHeader style={{minHeight: "50px"}}>
          <Box sx={{marginRight: "auto"}}>
            <Typography variant="h5"  sx={{ flexGrow: 1, fontSize: "16px !important", lineHeight: "0rem !important", marginLeft: "10px" }} className='menu-header color-white-3 pointer' onClick={() => navigate('/dashboard')}>Mekaro Hub</Typography>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon className='color-white-3' /> : <ChevronLeftIcon className='color-white-3' />}
          </IconButton>
        </DrawerHeader>
        <Divider style={{borderColor: "rgba(255, 255, 255, .3)", opacity: open ? 1 : 0}} />
        <List>
            { MENUITEMS.map(item => (
              <ListItem key={item.id} disablePadding sx={{ display: 'block' }} onClick={() => { navigate(item.link); selectItem(item) }} >
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} >
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                    <item.icon className='color-white-3' />
                  </ListItemIcon>
                  <ListItemText primary={item.title} className='item-list-menu color-white-3' sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </Drawer>
      {showShadow && open && (<ShadowBox onClick={handleDrawerClose} />)}
    </>
  );
}

export default Sidebar