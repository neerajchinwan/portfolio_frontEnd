import React from "react";

import {
    Grid,
    Typography,
    Button,
    Box
} from '@mui/material';

function HomeShortDescription() {

    const allProfileImage = [
        'Images/profileImageOne.jpeg',
        'Images/profileImageTwo.jpeg',
        'Images/profileImageThree.jpeg',
        'Images/profileImageFour.jpeg',
        'Images/profileImageFive.jpeg'
    ]

    function selectImage() {
        return Math.floor(Math.random() * 5);
    }

    const heading = `{ Introduction !!! }`

    return (
        <Grid container spacing={7}>

            <Grid item md={5} aria-label="short-introduction">
                {/* <Box component="img" src='https://source.unsplash.com/random' sx={{ */}
                <Box 
                    component="img" 
                    src={allProfileImage[selectImage()]} 
                    sx={{
                        width: '100%',
                        height: '500px',
                        objectFit: 'cover',
                        borderRadius: '25px',
                        boxShadow: '2px 2px 5px 5px rgba(0, 0, 0, 0.25)',
                        objectPosition: 'top'
                    }} 
                    alt="profile-image"></Box>
            </Grid>

            <Grid item md={7} sx={{ margin: 'auto' }}>
                <Typography variant="h1" fontSize={45} color='#5B0888'>{heading}</Typography>
                <Typography
                    variant="body1"
                    fontSize={16}
                    paddingTop={2}
                    paddingRight={3}
                >
                    Greetings, I'm Neeraj Chinwan, 28 years of age, currently residing in Delhi. While I pursued my studies in Delhi, my roots trace back to Uttarakhand. Presently, I am employed at AR Technity Pvt Ltd as a Front End Developer. My journey in this role commenced on September 23, 2021. However, I am now eager to transition my career into the realm of a full-stack developer, having recently acquired proficiency in the MERN Stack. Here, I also created my Portfolio using React technology and MUI as the front-end framework. I also have experience with Bootstrap, but I've chosen to focus on learning MUI due to its appeal and versatility. To get a glimpse of my work, please feel free to explore the "Work" section conveniently located in the navigation bar.
                </Typography>


                <br />
                <Button 
                    variant="contained" 
                    size="large" 
                    sx={{
                        backgroundColor: '#5B0888',
                        '&:hover': {
                            backgroundColor: '#5B0888'
                        }
                    }}
                >
                    Read More</Button>
            </Grid>
        </Grid>
    )
}

export default HomeShortDescription;