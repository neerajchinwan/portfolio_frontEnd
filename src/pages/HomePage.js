import React from "react";
import Navbar from "../features/navbar/component/Navbar";
import { Box, Container } from "@mui/material";

import HomeShortDescription from "../features/home/component/HomeShortDescription";
import HomeTechnologySection from "../features/home/component/HomeTechnologySection";
import HomeEducationSection from "../features/home/component/HomeEducationSection";
import HomeLiveWorkSection from "../features/home/component/HomeLiveWorkSection";
import HomeGallerySection from "../features/home/component/HomeGallerySection";
import Footer from "../features/footer/component/Footer";

function HomePage() {

    return (
        <>
            <Navbar></Navbar>

            {/* <Box component='div' sx={{ height: 80 }} ></Box> */}

            <Container maxWidth='xl' sx={{backgroundImage: 'url("images/homePageHeroImg2.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity:'1'}}>
                <Container maxWidth='lg'>
                <HomeShortDescription ></HomeShortDescription>
                    </Container>            
            </Container>
                
                <Container maxWidth='lg' >
                <Box component='div' sx={{ height: 80 }}></Box>
                <HomeTechnologySection></HomeTechnologySection>
                <Box component='div' sx={{ height: 80 }}></Box>
                <HomeEducationSection></HomeEducationSection>
                <Box component='div' sx={{ height: 80 }}></Box>

                {/* This is the work section */}
                <HomeLiveWorkSection></HomeLiveWorkSection>
                <Box component='div' sx={{ height: 80 }}></Box>

                {/* <HomeGallerySection></HomeGallerySection>

                <Box component='div' sx={{ height: 80 }}></Box> */}
            </Container>
            
            <Footer></Footer>
        </>
    )
};

export default HomePage;