import React from "react";
import { Box, Typography, Button, Link, Grid, Paper } from "@mui/material";
import Slider from 'react-slick';
import './homeLiveWorkSection.css';
import { useNavigate } from 'react-router-dom'



function HomeLiveWorkSection() {
    const navigate = useNavigate();

    const liveWorkHeading = `SOME LIVE WORK`

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            }
        ]
    };

    const buttonStyle = {
        background: "#5B0888",
        '&:hover': {
            background: "#5B0888"
        }
    }

    const liveWorkObj = [
        {
            id: 1,
            imageUrl: 'Images/gcm.png',
            websiteName: 'Global College Malta',
            description: `Global College Malta is in the process of revamping their college website, known as "Global College Malta." They aim to transform its appearance by utilizing Elementor, a platform known for its simplicity. Their existing website is notably cumbersome, which poses a unique challenge. Initially, I endeavored to redesign the site using the current color palette, but the client expressed dissatisfaction with the layout. Subsequently, they furnished us with a new color palette, prompting me to collaborate with a team of three to craft an entirely new design encompassing all the pages in accordance with the client's precise requirements. This multifaceted project embodies the essence of creative and collaborative efforts aimed at delivering a website that aligns seamlessly with the client's vision and goals.`,
            websiteUrl: 'https://gcm.edu.mt/'
        },
        {
            id: 2,
            imageUrl: 'Images/maison.png',
            websiteName: 'Maison Martial Desprin',
            description: `The primary challenge for this website lies in meeting the client's specific requests. They desire a sleek, dark black theme, aiming for compactness on essential pages like About, Contact, and Home, ensuring all content remains visible within a specific viewport, eliminating the need for scrolling. Additionally, the client seeks distinct backgrounds for various pages and a multilingual capability, with English and French versions. I've diligently tailored the website to align with these precise client requirements, creating a visually appealing and user-friendly digital space that caters to their unique preferences and multilingual audience.`,
            websiteUrl: 'https://www.maisonmartialdesprin.com/'
        },
        {
            id: 3,
            imageUrl: 'Images/Roland.png',
            websiteName: 'Roland Auer',
            description: `Creating Roland Auer's website marked my inaugural project at my current company, an endeavor not without its challenges. The client's unwavering demand for pixel-perfection, mirroring the design they provided, made it particularly exacting. The website's standout feature was a keyboard-navigable carousel, a demanding task considering its numerous instances, including modal boxes. Adapting this carousel seamlessly to mobile devices was another critical requirement. Determined to meet these demands, I took it upon myself to craft a custom carousel using JavaScript, a pivotal moment that deepened my affinity for working with this language.`,
            websiteUrl: 'https://roland-auer.com/'
        },
        {
            id: 4,
            imageUrl: 'Images/artechnity.png',
            websiteName: 'AR Technity',
            description: `Our company website, Artechnity, underwent a transformation under my guidance. Unlike its predecessor, which relied on a purchased theme, I took control of every aspect, from typography and images to the color palette. My aim was to create a distinct design. While I experimented with new layouts, prioritizing simplicity and uniqueness, the design remains a work in progress, particularly in terms of responsiveness. Some screens may display oversized fonts, and certain content sections could still be incomplete.`,
            websiteUrl: 'https://www.artechnity.com/'
        }
    ]

    return (<Box component='div'>
        <Typography
            variant="h2"
            fontSize={32}
            textAlign='center'
            color='#5B0888'
            sx={{ letterSpacing: '2px' }}
        >
            {liveWorkHeading}
        </Typography>
        <Box component='div' sx={{ height: 40 }}></Box>

        <Slider {...settings}>
            {
                liveWorkObj.map((item) => {
                    return <Paper key={item.id} >
                        <Grid container spacing={3} sx={{ padding: '20px ' }} >
                            <Grid item md={4} xs={12}>
                                <Box
                                    component='img'
                                    src={item.imageUrl}
                                    sx={{
                                        width: '100%',
                                        height: '400px',
                                        objectFit: 'cover',
                                        borderRadius: '15px'

                                    }}
                                />
                            </Grid>
                            <Grid item md={8} xs={12}>
                                <Typography variant="h3" fontSize={25} color='#5B0888'>{item.websiteName}</Typography>
                                <Typography variant="body2" fontSize={16} mt={3} mb={5} color='#333' fontStyle='italic'>{item.description}</Typography>
                                <Button variant='contained' sx={buttonStyle}><Link sx={{ color: '#fff' }} href={item.websiteUrl} underline="none" target='_blank'>Jump To the website</Link> </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                })
            }
        </Slider>

        <br />

        <Button
            onClick={() => navigate('/work')}
            variant="contained"
            size="large"
            sx={{
                backgroundColor: '#5B0888',
                color: '#fff',
                '&:hover': {
                    backgroundColor: '#fff',
                    color: '#5B0888'
                },
                fontWeight: '700',
                margin: 'auto',
                display: 'flex'
            }}
        >
            Read More</Button>

    </Box>);
}

export default HomeLiveWorkSection;