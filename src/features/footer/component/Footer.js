import React from "react";
import {Box, Typography} from '@mui/material';

function Footer() {
    return (<Box component='div' sx={{
        paddingTop: '25px',
        paddingBottom: '25px',
        background: '#5B0888'

    }}>
        <Typography variant="h3" textAlign='center' fontSize={16} sx={{ color: '#fff' }}>Design And Developed By Neeraj Chinwan</Typography>
    </Box>);
}

export default Footer;