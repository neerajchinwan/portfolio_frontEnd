import React from "react";
import Navbar from "../navbar/Navbar";
import { Box, Container } from "@mui/material";

import HomeShortDescription from "./homeShortDescription/HomeShortDescription";
import HomeTechnologySection from "./homeTechnologySection/HomeTechnologySection";
import HomeEducationSection from "./homeEducationSection.js/HomeEducationSection";
import HomeLiveWorkSection from "./homeLiveWorkSection.js/HomeLiveWorkSection";
import HomeGallerySection from "./homeGallerySection.js/HomeGallerySection";
import Footer from "../footer/Footer";

function Home() {

    return (
        <>
            <Navbar></Navbar>

            <Box component='div' sx={{ height: 80 }}></Box>

            <Container maxWidth='lg' >
                <HomeShortDescription></HomeShortDescription>
                <Box component='div' sx={{ height: 80 }}></Box>
                <HomeTechnologySection></HomeTechnologySection>
                <Box component='div' sx={{ height: 80 }}></Box>
                <HomeEducationSection></HomeEducationSection>
                <Box component='div' sx={{ height: 80 }}></Box>

                {/* This is the work section */}
                <HomeLiveWorkSection></HomeLiveWorkSection>
                <Box component='div' sx={{ height: 80 }}></Box>

                <HomeGallerySection></HomeGallerySection>

                <Box component='div' sx={{ height: 80 }}></Box>
            </Container>
            
            <Footer></Footer>
        </>
    )
};

export default Home;