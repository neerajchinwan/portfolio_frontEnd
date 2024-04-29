import React from "react";
import { Box, Typography, Grid } from '@mui/material';
import { FaGitSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Footer() {
    const iconStyle = {
        color: '#fff',
        fontSize: '20px',
        cursor: 'pointer'
    }


    return (<Box component='div' sx={{
        paddingTop: '25px',
        paddingBottom: '25px',
        background: '#5B0888'

    }}>

        <Grid container>
            <Grid item sx={12} md={6}>
                <Typography variant="h3" textAlign='center' fontSize={16} sx={{ color: '#fff' }}>Design And Developed By Neeraj Chinwan</Typography>
            </Grid>
            <Grid item sx={12} md={6}>
                <Typography variant="h3" textAlign='center' fontSize={16} sx={{ color: '#fff' }}>
                    <FaGitSquare onClick={() => window.open('https://github.com/neerajchinwan', '_blank')} style={iconStyle} />
                    &nbsp; &nbsp;
                    <FaLinkedin onClick={() => window.open('www.linkedin.com/in/neeraj-chinwan-93b75b200', '_blank')} style={iconStyle} />
                    &nbsp; &nbsp;
                    <SiLeetcode onClick={() => window.open('https://leetcode.com/u/neeraj14chinwan/', '_blank')} style={iconStyle} />
                </Typography>
            </Grid>
        </Grid>
    </Box>);
}

export default Footer;