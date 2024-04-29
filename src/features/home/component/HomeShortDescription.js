import React from "react";

import {
    Grid,
    Typography,
    Button,
    Box
} from '@mui/material';
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { FaGitSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

function HomeShortDescription() {
    const navigate = useNavigate();
    const isDesktop = useMediaQuery({
        query: '(min-width:768px)'
    })

    const desktopStyle = {
        width: '350px',
        height: '400px',
        objectFit: 'cover',
        borderRadius: '12px',
        boxShadow: '2px 2px 5px 5px rgba(0, 0, 0, 0.25)',
        objectPosition: 'top'
    }

    const mobileStyle = {
        width: '100px',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '12px',
        boxShadow: '2px 2px 5px 5px rgba(0, 0, 0, 0.25)',
        objectPosition: 'top',
        margin: 'auto',
        display: 'flex'
    }

    const iconStyle = {
        color: '#fff',
        fontSize: '30px',
        cursor: 'pointer'
    }

    const heading = `NEERAJ CHINWAN`;

    return (
        <Grid container spacing={7} sx={{paddingTop: '80px', paddingBottom: '80px'}}>

            <Grid item md={5} xs={12} aria-label="short-introduction">
                <Box 
                    component="img" 
                    src='Images/profileNine.jpeg' 
                    sx={isDesktop ? desktopStyle : mobileStyle} 
                    alt="profile-image"></Box>
            </Grid>

            <Grid item md={7} xs={12} sx={{ margin: 'auto' }}>
                <Typography variant='h1' component='h1' fontSize={45} color='#fff' sx={{letterSpacing: '2px'}}>{heading}</Typography>
                <Typography
                    variant="h5"
                    component="h2"
                    paddingTop={1}
                    paddingRight={3}
                    sx={{color: '#fff'}}
                >
                    ( MERN DEVELOPER )
                </Typography>
                <Box height='10px'></Box>
                <FaGitSquare onClick={() => window.open('https://github.com/neerajchinwan', '_blank')}  style={iconStyle} />
                &nbsp; &nbsp;
                <FaLinkedin onClick={() => window.open('www.linkedin.com/in/neeraj-chinwan-93b75b200', '_blank')} style={iconStyle} />
                &nbsp; &nbsp;
                <SiLeetcode onClick={() => window.open('https://leetcode.com/u/neeraj14chinwan/', '_blank')} style={iconStyle} />
                <Typography
                    variant="body1"
                    paddingTop={1}
                    paddingRight={3}
                    sx={{color: '#fff'}}
                >
                    I started my journey as a front end developer at AR Technity Pvt Ltd on 23 sep 2021, After working more the 2 years I gain lot of intereset in backend also. So I decide to learn MERN stack to become a full stack developer
                </Typography>
                <Box height='10px'></Box>
                <Button
                    onClick= {() => navigate('/about')}
                    variant="contained" 
                    size="large" 
                    sx={{
                        backgroundColor: '#fff',
                        '&:hover': {
                            backgroundColor: '#fff'
                        },
                        color: '#5B0888',
                        fontWeight: '800'
                    }}
                >
                    Read More</Button>
            </Grid>
        </Grid>
    )
}

export default HomeShortDescription;