import React from "react";
import { Grid } from '@mui/material';

import ThemeCard from "../../common/component/ThemeCard";

function BackendTechnology(){

    const backendTechnology = [
        { 
            imageUrl: 'Images/nodejs.webp',
            name: 'NODE JS',
            description: 'Node.js is a powerful JavaScript runtime environment. It enables server-side scripting, offering non-blocking, event-driven architecture for building fast and scalable network applications.',
            url: 'https://nodejs.org/en'
        },
        { 
            imageUrl: 'Images/express.png', 
            name: 'EXPRESS JS',
            description: 'Express.js is a minimalist and flexible Node.js web application framework. It simplifies building robust and efficient web applications by providing essential tools and middleware.',
            url: 'https://expressjs.com/'
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
                            buttonUrl={item.url}
                        ></ThemeCard>
                    </Grid>
            })
        }
    </Grid>)
}

export default BackendTechnology;