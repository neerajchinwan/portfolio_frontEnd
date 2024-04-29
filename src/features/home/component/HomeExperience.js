import React from "react";
import { Typography, Box, Paper } from '@mui/material';


function HomeExperience() {

    return (<Box component='div'>
        <Typography 
        variant="h2" 
        fontSize={35} 
        textAlign='center' 
        sx={{ color: '#5B0888', letterSpacing: '2px'}}
        >WORK EXPERIENCE</Typography>
        <Box component='div' sx={{ height: 40 }}></Box>
        <Paper sx={{padding: '25px'}}>
        <Typography 
        variant="body1" 
        textAlign='center' 
        >I Have Two Years and six month of Experince as a front end developer at AR Technity Pvt Ltd. I generally create the website design according to the client need. Adding functionality through js according to client need. Most of the project are wordpress project so my main work is to make the design. Sometime most of the things I do using plain css and javascript because I found that using js instead of plugin for every thing is better so I gain lots of knowledge in these two years and a solid understanding of web development other than wordpress but also regarding to the backend </Typography>

        </Paper>
    </Box>);
}

export default HomeExperience;