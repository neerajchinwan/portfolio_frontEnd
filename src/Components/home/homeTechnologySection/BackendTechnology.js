import React from "react";
import { Grid } from '@mui/material';

import ThemeCard from "../../common/ThemeCard";

function BackendTechnology(){

    const backendTechnology = [
        { 
            imageUrl: 'images/nodejs.webp',
            name: 'NODE JS',
            description: 'Node.js is a powerful JavaScript runtime environment. It enables server-side scripting, offering non-blocking, event-driven architecture for building fast and scalable network applications.'
        },
        { 
            imageUrl: 'images/express.png', 
            name: 'EXPRESS JS',
            description: 'Express.js is a minimalist and flexible Node.js web application framework. It simplifies building robust and efficient web applications by providing essential tools and middleware.'
        }
    ]

    return(<Grid container spacing={5}>
        {
            backendTechnology.map((item, key) => {
                return <Grid md={4} item key={key}>
                        <ThemeCard
                            url={item.imageUrl}
                            name={item.name}
                            description={item.description}
                            buttonOneTitle='share'
                            buttonTwoTitle='Learn More'
                        ></ThemeCard>
                    </Grid>
            })
        }
    </Grid>)
}

export default BackendTechnology;