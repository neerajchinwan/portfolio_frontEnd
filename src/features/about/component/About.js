import { Box, Container, Grid, Typography } from "@mui/material";

function About(){
    const imageStyle = {
        width: '80%',
        borderRadius: '15px',
        marginLeft: 'auto',
        height: '400px',
        objectFit: 'cover',
        objectPosition: 'center'
    }
    return (<>
        <Container maxWidth='xl' sx={{background: '#5B0888'}}>
            <Grid
            sx={{height: '150px'}}
            container  
            justifyContent='center'
            alignItems='center'
            >
            <Typography variant='h2' component='h1' color='#fff'>About</Typography>
            </Grid>
        </Container>

        <Box height={50}></Box>
        <Container maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                    <img src="Images/profileSeven.jpeg" style={imageStyle} alt="profile-image" />
                </Grid>

                <Grid item xs={12} md={7}>Hello My name is Neeraj Chinwan I experienced as a front end developer but now I am a full stack developer in MERN Stack. I have two years and six month of experience in front end development. Now I want to push myself beyond that so I choose to become a full stack developer.
                <br />
                <br />
                But the challenge for me is to learn what technology so I decide to learn MERN stack. For frontend I learn React, as I already know the front end Tech Like  HTML, CSS, JS, BOOTSTRAP, WORDPRESS ETC.
                <br />
                <br />
                For database I learn mongodb as it is noSql database and it is basically object oriented database in which it saves data in collection and document form so it is easy for me to understand and but after learning mongodb I came to know about mongoose which is ODM of the mongodb so mongoose is very helpful we can create schema base database using mongoose very easily
                <br />
                <br />
                For Backend I learn NodeJs and express which is important for the nodejs developer so I learned how to make api. Then about MVC architectures, routes , authentication, hashing and all.
                </Grid>
            </Grid>
        </Container>
        <Box height={50}></Box>
        </>)
}

export default About;