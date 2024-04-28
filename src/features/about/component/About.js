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
                    <img src="images/profileImageOne.jpeg" style={imageStyle} alt="profile-image" />
                </Grid>

                <Grid item xs={12} md={7}>Greetings, I'm Neeraj Chinwan, 28 years of age, currently residing in Delhi. While I pursued my studies in Delhi, my roots trace back to Uttarakhand. Presently, I am employed at AR Technity Pvt Ltd as a Front End Developer. My journey in this role commenced on September 23, 2021. However, I am now eager to transition my career into the realm of a full-stack developer, having recently acquired proficiency in the MERN Stack. Here, I also created my Portfolio using React technology and MUI as the front-end framework. I also have experience with Bootstrap, but I've chosen to focus on learning MUI due to its appeal and versatility. To get a glimpse of my work, please feel free to explore the "Work" section conveniently located in the navigation bar.</Grid>
            </Grid>
        </Container>
        <Box height={50}></Box>
        </>)
}

export default About;