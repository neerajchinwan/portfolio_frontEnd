import React, { useState } from "react";
import {
    AppBar, 
    Toolbar, 
    IconButton, 
    Typography, 
    Stack, 
    Button, 
    Menu, 
    MenuItem
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Cabin from '@mui/icons-material/Cabin';
import { useNavigate  } from "react-router";
import { FaSuitcase } from "react-icons/fa";

function Navbar(){
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [position, setPosition] = useState('static')

    const navbarStyle = {
        backgroundColor: '#5B0888',
        
    }

    function handleClick(event){
        setAnchorEl(event.currentTarget);
    }

    function handleClose(event){
        setAnchorEl(null);
    }

    const handleScroll = () => {
        window.scrollY > 100 ? setPosition('sticky') : setPosition('static')
    }

    window.addEventListener('scroll', handleScroll)



    return(<AppBar position={position} sx={navbarStyle}>
        <Toolbar>
            <IconButton size='small' edge='middle' color='inherit' sx={{marginBottom: '5px'}} aria-label='logo'>
                <FaSuitcase />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow : 1, fontWeight: '800', marginLeft: '10px'}}>
                PORTFOLIO
            </Typography>
            <Stack direction='row' spacing={2}>
                <Button color='inherit' sx={{fontWeight: '700'}} onClick={() => navigate('/')}>Home</Button>
                <Button color='inherit' sx={{fontWeight: '700'}} onClick={() => navigate('/about')}>About</Button>
                <Button color='inherit' sx={{fontWeight: '700'}} onClick={() => navigate('/work')}>My Work</Button>
                <Button 
                color='inherit' 
                id='resource-button' 
                onClick={handleClick} 
                aria-controls={Boolean(anchorEl) ? 'resource-menu': undefined}
                aria-haspopup='true'
                aria-expanded= {Boolean(anchorEl) ? 'true': undefined}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{fontWeight: '700'}}
                >
                    Projects</Button>
            </Stack>
            <Menu 
            id='resource-menu' 
            anchorEl={anchorEl} 
            open={Boolean(anchorEl)} 
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'resource-button'
            }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            >
                <MenuItem sx={{fontWeight: '700'}} onClick={() => {
                    navigate('/todo');
                    handleClose();
                }}>ToDo list</MenuItem>
                <MenuItem sx={{fontWeight: '700'}} onClick={handleClose}>Project One</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>)
}

export default Navbar;