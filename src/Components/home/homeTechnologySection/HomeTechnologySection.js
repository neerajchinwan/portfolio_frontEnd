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

    const Heading = `{ Technologies I Know !!! }`


    return (<Box component='div'>
        <Typography 
            variant="h2" 
            fontSize={40} 
            textAlign='center' 
            color='#5B0888'
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