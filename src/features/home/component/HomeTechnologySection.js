import React, { useState } from "react";
import { Box, Typography } from '@mui/material';

import HomeTechnologyButtonGroup from "./HomeTechnologyButtonGroup";
import FrontEndTechnology from "./FrontEndTechnology";
import DatabaseTechnology from "./DatabaseTechnology";
import BackendTechnology from "./BackendTechnology";

function HomeTechnologySection() {
    const [selectTechnology, setSelectTechnology] = useState('frontEnd')

    const technology = {
        frontEnd: <FrontEndTechnology></FrontEndTechnology>,
        database: <DatabaseTechnology></DatabaseTechnology>,
        backEnd: <BackendTechnology></BackendTechnology>
    }

    const Heading = `TECHNOLOGIES I KNOW`


    return (<Box component='div'>
        <Typography 
            variant="h2" 
            fontSize={35} 
            textAlign='center' 
            color='#5B0888'
            sx={{letterSpacing: '2px'}}
        >
             {Heading}</Typography>
        
        <Box component='div' p={5}>       
            <HomeTechnologyButtonGroup activeButton={(e) => {setSelectTechnology(e)}}></HomeTechnologyButtonGroup>

            <br />
            <br />

            {/* here is select the selected portion by the button */}
            {technology[selectTechnology]}
        </Box>
    </Box>)
}

export default HomeTechnologySection;