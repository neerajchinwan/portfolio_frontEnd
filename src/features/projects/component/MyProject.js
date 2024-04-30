import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectList from "../../common/component/ProjectList";

function MyProject(){

    const projectList = [
        {
            id: 1,
            image: 'Images/todoList.png',
            title: '1. Todo List',
            description: `This is the first project full stack project, I used react for front end and many other technologies for frontend like react hook form, axios for fetching the request, redux for state management library, Sweetalert to show the alert messages, bootstrap.
            I used mongodb as a databse and i used mongoose because it is the most famous odm for mongodb
            I used expressjs and nodejs and also used json webtoken for authentication but for now I did not create a session I prefer to store the token in the localStorage for now.`,
            location: "https://todo-list-six-lake.vercel.app/"
        },
        {
            id: 2,
            image: 'Images/flaquiz.png',
            title: '2. Flag Quiz',
            description: `This a react practice which I made a simple game of guessing the flag of the countries and you got one point if you guess the right flag`,
            location: 'https://flagquiz-five.vercel.app/'
        }
    ]
    return (<>
        <Container maxWidth='xl' sx={{background: '#5B0888'}}>
            <Grid
            sx={{height: '150px'}}
            container  
            justifyContent='center'
            alignItems='center'
            >
            <Typography variant='h2' component='h1' color='#fff'>MERN Projects</Typography>
            </Grid>
        </Container>
        <Container maxWidth='lg'>
        {
            projectList.map(project => {
                return <ProjectList
                key={project.id}
                projectTitle={project.title}
                projectSS={project.image}
                projectDescription={project.description}
                location={project.location}
                />
            })
        }
        </Container>
        <Box height={50}></Box>
        </>)
}

export default MyProject;