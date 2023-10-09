import React, { useState } from "react";
import {
    Box,
    ButtonGroup,
    Button
} from '@mui/material';

function HomeTechnologyButtonGroup(props) {

    const [technology, setTechnology] = useState('frontEnd');

    props.activeButton(technology)

    function handleClickTechnology(e){
        setTechnology(e.target.name)
    }

    const buttonActive = {
        backgroundColor : '#EC53B0',
        '&:hover': {
            backgroundColor: '#EC53B0'
        }
    }

    const normalButtonStyle = {
        backgroundColor: '#5B0888',
        '&:hover': {
            backgroundColor: '#5B0888'
        }
    }

    return (<Box component='div' sx={{ textAlign: 'center' }}>
        <ButtonGroup
            size="large"
            aria-label='Technology Button Group'
            variant='contained'
            sx={{ margin: 'auto' }}
        >
            <Button 
                onClick={handleClickTechnology} 
                name='frontEnd' 
                sx={technology == 'frontEnd' ? buttonActive : normalButtonStyle}
            >
                Front End Technology</Button>
            <Button 
                onClick={handleClickTechnology} 
                name='database' 
                sx={technology == 'database' ? buttonActive : normalButtonStyle}
            >
                Database</Button>
            <Button 
                onClick={handleClickTechnology} 
                name='backEnd' 
                sx={technology == 'backEnd' ? buttonActive : normalButtonStyle}
            >
                Back End Technology</Button>
        </ButtonGroup>
    </Box>)
}

export default HomeTechnologyButtonGroup;