import { styled } from '@mui/material/styles';

import { Menu, IconButton, Typography, MenuItem, Divider } from '@mui/material';

import useSubMenu from '../../hooks/useSubMenu'

const CustomeMenu = styled(Menu)(({ theme }) => ({
    '& ul': {
        background: "#0D0D0D"
    },
    '& .MuiPaper-root': {
        background: "#0D0D0D"
    },
    '& ul li': {
        fontFamily: "'Poppins', sans-serif",
        fontSize: 16,
        fontWeight: 400,
        textTransform: 'Capitalize',
        color: "#C9C9C9",
        paddingLeft: "30px",
        paddingRight: "30px"
    },
}));

const SubMenu = ({icon, id, items}) => {

    const { elementAnchor, closeMenu, handleMenu } = useSubMenu()

  return (
    <div>
        <IconButton size="large" aria-label={id} aria-controls={id} aria-haspopup="true" onClick={handleMenu}color="inherit">
            {icon}
        </IconButton>

        <CustomeMenu id={id} anchorEl={elementAnchor} anchorOrigin={{ vertical: 'top', horizontal: 'right',}} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left', }}
            open={Boolean(elementAnchor)}
            onClose={closeMenu}
        >
            {items && items.map((item, index) => (
                item.special? 
                <Divider key={`divider-${index}`} style={{borderColor: "rgba(255, 255, 255, .3)"}} />:
                <MenuItem key={item.id} onClick={() => { item.click(); closeMenu(); }}>{item.title}</MenuItem>
            ))}
        </CustomeMenu>
</div>
  )
}

export default SubMenu