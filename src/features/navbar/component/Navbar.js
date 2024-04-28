import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Stack,
    Button,
    Menu,
    MenuItem,
    Drawer,
    createTheme,
    ThemeProvider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router";
import { FaSuitcase } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';

function Navbar() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [position, setPosition] = useState('static');
    const [openDrawer, setOpenDrawer] = useState(false);
    const iSDesktop = useMediaQuery({
        query: '(min-width: 768px)'
    })

    const navbarStyle = {
        backgroundColor: '#5B0888',
    }

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    const handleScroll = () => {
        window.scrollY > 100 ? setPosition('sticky') : setPosition('static')
    }

    window.addEventListener('scroll', handleScroll)

    const theme = createTheme();

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setOpenDrawer(open);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar position={position} sx={navbarStyle}>
                <Toolbar>

                    <IconButton
                        size='small'
                        color='inherit'
                        sx={{ marginBottom: '5px' }}
                        aria-label='logo'
                    >
                        <FaSuitcase />
                    </IconButton>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1, fontWeight: '800', marginLeft: '10px' }}
                    >
                        PORTFOLIO
                    </Typography>
                    {
                        iSDesktop ? <Stack direction='row' spacing={2}><Button color='inherit' sx={{ fontWeight: '700' }} onClick={() => navigate('/')}>Home</Button>
                            <Button color='inherit' sx={{ fontWeight: '700' }} onClick={() => navigate('/about')}>About</Button>
                            <Button color='inherit' sx={{ fontWeight: '700' }} onClick={() => navigate('/work')}>My Work</Button>
                            <Button color='inherit' sx={{ fontWeight: '700' }} onClick={() => navigate('/mern')}>MERN Project</Button></Stack> : <IconButton
                                size='small'
                                color='inherit'
                                sx={{ marginBottom: '5px' }}
                                aria-label='menu'
                                onClick={toggleDrawer(true)}
                            >
                            <MenuIcon />
                        </IconButton>
                    }


                </Toolbar>
                <Drawer
                    anchor="top"
                    open={openDrawer}
                    onClose={toggleDrawer(false)}
                >
                    <div
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <Stack spacing={2} p={2}>
                            <Button onClick={() => navigate('/')}>Home</Button>
                            <Button onClick={() => navigate('/about')}>About</Button>
                            <Button onClick={() => navigate('/work')}>My Work</Button>
                            <Button onClick={() => navigate('/mern')}>MERN Project</Button>
                        </Stack>
                    </div>
                </Drawer>
            </AppBar>
        </ThemeProvider>
    );
}

export default Navbar;
