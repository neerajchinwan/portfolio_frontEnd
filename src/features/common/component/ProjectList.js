import { Grid, Typography, Box, Button } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

function ProjectList({ projectTitle, projectSS, projectDescription, location }) {
    const isDesktop = useMediaQuery({
        query: '(min-width: 768px)'
    })
    const imageStyle = {
        width: '80%',
        borderRadius: '15px',
        marginLeft: 'auto',
        height: '200px',
        objectFit: 'contain',
        objectPosition: 'top-center'
    }
    const buttonStyle = {
        backgroundColor: '#5B0888',
        color: '#fff',
        fontWeight: '700',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#5B0888',
            fontWeight: '700'
        }
    }

    const handleClick = () => {
        window.open(`${location}`, '_blank')
    }

    return (<>
        <Box height={50}></Box>
        <Grid container spacing={3}>

            <Grid item xs={12}>
                <Typography variant='h4' component='h2' color='#5B0888'>{projectTitle}</Typography>
            </Grid>

            {
                isDesktop ?
                    <>
                        <Grid item xs={12} md={6}>
                            <Typography variant='body1' component='p'>{projectDescription}</Typography>
                            <br />
                            <Button variant='contained' sx={buttonStyle} onClick={handleClick}> View </Button>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <img src={projectSS} style={imageStyle} alt="profile-image" />
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} md={6}>
                            <img src={projectSS} style={imageStyle} alt="profile-image" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant='body1' component='p'>{projectDescription}</Typography>
                            <br />
                            <Button variant='contained' sx={buttonStyle} onClick={handleClick}> View </Button>
                        </Grid>
                    </>
            }


        </Grid></>
    )
}

export default ProjectList;