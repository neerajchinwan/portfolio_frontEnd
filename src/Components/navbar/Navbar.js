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

function Navbar(){
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);

    const navBarColor = {
        backgroundColor: '#5B0888'
    }

    function handleClick(event){
        setAnchorEl(event.currentTarget);
    }

    function handleClose(event){
        setAnchorEl(null);
    }

    return(<AppBar position='static' style={navBarColor}>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                <Cabin />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow : 1}}>
                NEERAJ CHINWAN
            </Typography>
            <Stack direction='row' spacing={2}>
                <Button color='inherit' onClick={() => navigate('/')}>Home</Button>
                <Button color='inherit' onClick={() => navigate('/about')}>About</Button>
                <Button color='inherit' onClick={() => navigate('/work')}>My Work</Button>
                <Button 
                color='inherit' 
                id='resource-button' 
                onClick={handleClick} 
                aria-controls={Boolean(anchorEl) ? 'resource-menu': undefined}
                aria-haspopup='true'
                aria-expanded= {Boolean(anchorEl) ? 'true': undefined}
                endIcon={<KeyboardArrowDownIcon />}
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
                <MenuItem onClick={() => {
                    navigate('/todo');
                    handleClose();
                }}>ToDo list</MenuItem>
                <MenuItem onClick={handleClose}>Project One</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>)
}

export default Navbar;