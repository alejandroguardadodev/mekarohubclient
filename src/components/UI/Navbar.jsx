import {useState} from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { Menu, MenuItem, IconButton, Typography, Toolbar } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';

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

  return (
      <AppBar position="fixed" style={{background: "black"}} open={open}>
        <Toolbar>
          <IconButton size="large" edge="start" aria-label="menu" onClick={handleDrawerOpen} sx={{ ...(open && { display: 'none' }), }}>
            <MenuIcon className='color-white-3' />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} className='menu-header color-white-3 pointer' onClick={() => navigate('/dashboard')}>Mekaro Hub</Typography>
          <div>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu}color="inherit">
                <AccountCircle className='color-white-3' />
              </IconButton>

              <Menu id="menu-appbar" anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;