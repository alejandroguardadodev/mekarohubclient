import {useState} from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { Menu, MenuItem, IconButton, Typography, Toolbar } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import SubMenu from './SubMenu.jsx';

import { DRAWERWIDTH } from '../../types/consts.js'

// NEW APP BAR ///////////////////
const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }), ...(open && {
    marginLeft: DRAWERWIDTH,
    width: `calc(100% - ${DRAWERWIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Navbar = ({open, handleDrawerOpen}) => {

  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const perfilSubMenuItems = [
    {
      id: 0,
      title: 'My Profile',
      click: () => navigate('/my-profile')
    },
    {
      id: 1,
      title: 'Notifies',
      click: () => {}
    }
  ]

  return (
      <AppBar position="fixed" style={{background: "#1C1C1C"}} open={open}>
        <Toolbar className='flex-row-between' style={{ minHeight: "50px" }}>
          <IconButton size="large" edge="start" aria-label="menu" onClick={handleDrawerOpen} sx={{ ...(open && { display: 'none' }), }}>
            <MenuIcon className='color-white-3' />
          </IconButton>
          <Typography variant="h5"  sx={{ ...(open && { display: 'none' }), flexGrow: 1, fontSize: "16px !important", lineHeight: "0rem !important" }} className='menu-header color-white-3 pointer' onClick={() => navigate('/dashboard')}>Mekaro Hub</Typography>
          <div style={{ marginLeft: "auto" }}>
            <SubMenu id="my-perfil-submenu" icon={<AccountCircle className='color-white-3' />} items={perfilSubMenuItems} />
          </div>
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;