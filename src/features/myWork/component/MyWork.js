import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectList from "../../common/component/ProjectList";

function MyWork(){

    const workList = [
        {   id: 1,
            image: 'images/gcm.png',
            title: '1. Global College Malta',
            description: `Global College Malta is in the process of revamping their college website, known as "Global College Malta." They aim to transform its appearance by utilizing Elementor, a platform known for its simplicity. Their existing website is notably cumbersome, which poses a unique challenge. Initially, I endeavored to redesign the site using the current color palette, but the client expressed dissatisfaction with the layout. Subsequently, they furnished us with a new color palette, prompting me to collaborate with a team of three to craft an entirely new design encompassing all the pages in accordance with the client's precise requirements. This multifaceted project embodies the essence of creative and collaborative efforts aimed at delivering a website that aligns seamlessly with the client's vision and goals.`,
            location: 'https://gcm.edu.mt/'
        },
        {
            id: 2,
            image: 'images/maison.png',
            title: '2.Maison Martial Desprin',
            description: `The primary challenge for this website lies in meeting the client's specific requests. They desire a sleek, dark black theme, aiming for compactness on essential pages like About, Contact, and Home, ensuring all content remains visible within a specific viewport, eliminating the need for scrolling. Additionally, the client seeks distinct backgrounds for various pages and a multilingual capability, with English and French versions. I've diligently tailored the website to align with these precise client requirements, creating a visually appealing and user-friendly digital space that caters to their unique preferences and multilingual audience.`,
            location: 'https://www.maisonmartialdesprin.com/'
        },
        {
            id: 3,
            image: 'images/Roland.png',
            title: '3. Roland Auer',
            description: `Creating Roland Auer's website marked my inaugural project at my current company, an endeavor not without its challenges. The client's unwavering demand for pixel-perfection, mirroring the design they provided, made it particularly exacting. The website's standout feature was a keyboard-navigable carousel, a demanding task considering its numerous instances, including modal boxes. Adapting this carousel seamlessly to mobile devices was another critical requirement. Determined to meet these demands, I took it upon myself to craft a custom carousel using JavaScript, a pivotal moment that deepened my affinity for working with this language.`,
            location: 'https://roland-auer.com/'
        },
        {
            id: 4,
            image: 'images/artechnity.png',
            title: '4. AR Technity',
            description: `Our company website, Artechnity, underwent a transformation under my guidance. Unlike its predecessor, which relied on a purchased theme, I took control of every aspect, from typography and images to the color palette. My aim was to create a distinct design. While I experimented with new layouts, prioritizing simplicity and uniqueness, the design remains a work in progress, particularly in terms of responsiveness. Some screens may display oversized fonts, and certain content sections could still be incomplete.`,
            location: 'https://www.artechnity.com/'
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
            <Typography variant='h2' component='h1' color='#fff'>My Live Work</Typography>
            </Grid>
        </Container>

        <Container maxWidth='lg'>
        {
            workList.map(work => {
                return <ProjectList
                key={work.id}
                projectTitle={work.title}
                projectSS={work.image}
                projectDescription={work.description}
                location={work.location}
                />
            })
        }
        </Container>
        <Box height={50}></Box>
        </>)
}

export default MyWork;