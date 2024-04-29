import React from "react";
import { Grid } from '@mui/material';

import ThemeCard from "../../common/component/ThemeCard";

function DatabaseTechnology(){
    const databaseTechnology = [
        { 
            imageUrl: 'Images/mongodb.png',
            name: 'MONGODB',
            description: 'MongoDB is a NoSQL database system known for its flexibility. It stores data in a document format, making it ideal for scalable and dynamic applications..',
            url:'https://www.mongodb.com/'
        },
        { 
            imageUrl: 'Images/mongoose.png', 
            name: 'MONGOOSE',
            description: 'Mongoose is an elegant Node.js library that simplifies MongoDB interactions by providing a schema-based modeling and querying system, enhancing the developer experience.',
            url:'https://mongoosejs.com/'
        }
    ]

    return(<Grid container spacing={5}>
        {
            databaseTechnology.map((item, key) => {
                return <Grid md={4} item key={key}>
                        <ThemeCard
                            url={item.imageUrl}
                            name={item.name}
                            description={item.description}
                            huttonUrl={item.url}
                        ></ThemeCard>
                    </Grid>
            })
        }
    </Grid>)
}

export default DatabaseTechnology;