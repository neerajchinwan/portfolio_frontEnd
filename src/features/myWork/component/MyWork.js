import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectList from "../../common/component/ProjectList";

function MyWork(){

    const workList = [
        {   id: 1,
            image: 'Images/gcm.png',
            title: '1. Global College Malta',
            description: `Global College Malta is in the process of revamping their college website, known as "Global College Malta." They aim to transform its appearance by utilizing Elementor, a platform known for its simplicity. Their existing website is notably cumbersome, which poses a unique challenge. Initially, I endeavored to redesign the site using the current color palette, but the client expressed dissatisfaction with the layout. Subsequently, they furnished us with a new color palette, prompting me to collaborate with a team of three to craft an entirely new design encompassing all the pages in accordance with the client's precise requirements. This multifaceted project embodies the essence of creative and collaborative efforts aimed at delivering a website that aligns seamlessly with the client's vision and goals.`,
            location: 'https://gcm.edu.mt/'
        },
        {
            id: 2,
            image: 'Images/maison.png',
            title: '2.Maison Martial Desprin',
            description: `The primary challenge for this website lies in meeting the client's specific requests. They desire a sleek, dark black theme, aiming for compactness on essential pages like About, Contact, and Home, ensuring all content remains visible within a specific viewport, eliminating the need for scrolling. Additionally, the client seeks distinct backgrounds for various pages and a multilingual capability, with English and French versions. I've diligently tailored the website to align with these precise client requirements, creating a visually appealing and user-friendly digital space that caters to their unique preferences and multilingual audience.`,
            location: 'https://www.maisonmartialdesprin.com/'
        },
        {
            id: 3,
            image: 'Images/Roland.png',
            title: '3. Roland Auer',
            description: `Creating Roland Auer's website marked my inaugural project at my current company, an endeavor not without its challenges. The client's unwavering demand for pixel-perfection, mirroring the design they provided, made it particularly exacting. The website's standout feature was a keyboard-navigable carousel, a demanding task considering its numerous instances, including modal boxes. Adapting this carousel seamlessly to mobile devices was another critical requirement. Determined to meet these demands, I took it upon myself to craft a custom carousel using JavaScript, a pivotal moment that deepened my affinity for working with this language.`,
            location: 'https://roland-auer.com/'
        },
        {
            id: 4,
            image: 'Images/artechnity.png',
            title: '4. AR Technity',
            description: `Our company website, Artechnity, underwent a transformation under my guidance. Unlike its predecessor, which relied on a purchased theme, I took control of every aspect, from typography and images to the color palette. My aim was to create a distinct design. While I experimented with new layouts, prioritizing simplicity and uniqueness, the design remains a work in progress, particularly in terms of responsiveness. Some screens may display oversized fonts, and certain content sections could still be incomplete.`,
            location: 'https://www.artechnity.com/'
        },
        {
            id: 5,
            image: 'Images/ldn.png',
            title: '5. Lex Daily News',
            description: `This website is already created in Divi builder but the client want to create the same website in the elementor for his compatibility so the chalenge is to make the same website but with betterment in some parts and there are lots of flows in the current website.So we add lots of functionality with existing functionality. This website also have payment system and wallet system`,
            location: 'https://lexdailynews.fr/'
        },
        {
            id: 6,
            image: 'Images/ers.png',
            title: '6. Engineered Reacing Service',
            description: `This is a canadian website it is one of the most difficult website for me because in this the cms is some aftermarket website and  the main problem is they don't give the access of the pages the only thing is they add a plugin by which we can add additional css and js so we mostly handle the website using js and css.`,
            location: 'https://engineeredracing.ca/'
        },
        {
            id: 7,
            image: 'Images/maude.png',
            title: '7. MaudeDegoer',
            description: `This website is educational website where client taught designs and all to the kids and they want the curvy styles in their project and want some unique design according to their need.`,
            location: 'https://maudedegoer.com/'
        },
        {
            id: 8,
            image: 'Images/stresscoach.png',
            title: '8. Stress Coach',
            description: `We improve this website as the previous version of the website has lots of bugs and bad interface for mobile and desktop.`,
            location: 'https://stresscoach.it/'
        },
        {
            id: 9,
            image: 'Images/matteorocca.png',
            title: '9. Matteorocca',
            description: `We improve this website as the previous version of the website has lots of bugs and bad interface for mobile and desktop.`,
            location: 'https://www.matteorocca.com/'
        },
        {
            id: 10,
            image: 'Images/confinity.png',
            title: '10. Confinity Solution',
            description: `I basically add javascript code in the website to solve some problems of redirect and some of them are dom manipulations`,
            location: 'https://cllm.confinity-solutions.com/support/'
        },
        {
            id: 11,
            image: 'Images/lafaix.png',
            title: '11. Lafaix',
            description: `The client already purchase a theme for this website so we modify some funcitonality and the website uses wp-bakery as a page builder and I also add javascript code for the booking section for a week plan`,
            location: 'https://www.la-faix.com/'
        },
        {
            id: 12,
            image: 'Images/rpmag.png',
            title: '12. RPM Mag',
            description: `This website is generally came for some small changes and all this website is about the magazines of cars`,
            location: 'https://rpm-mag.com/'
        },
        {
            id: 13,
            image: 'Images/lcv.png',
            title: '13. La Classe Verte',
            description: `This website is also created in elementor as of client need they provide content for the website and color they just need clean design for their website this is simple website`,
            location: 'https://la-classe-verte.fr/'
        },
        {
            id: 14,
            image: 'Images/florence.png',
            title: '14. Florence',
            description: `This website is also created in elementor as of client need they provide content for the website and color they just need clean design for their website this is simple website`,
            location: 'https://florence-thesmar.fr/'
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