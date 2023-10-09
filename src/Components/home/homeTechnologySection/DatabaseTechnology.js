import React from "react";
import { Grid } from '@mui/material';

import ThemeCard from "../../common/ThemeCard";

function DatabaseTechnology(){
    const databaseTechnology = [
        { 
            imageUrl: 'images/mongodb.png',
            name: 'MONGODB',
            description: 'MongoDB is a NoSQL database system known for its flexibility. It stores data in a document format, making it ideal for scalable and dynamic applications..'
        },
        { 
            imageUrl: 'images/mongoose.png', 
            name: 'MONGOOSE',
            description: 'Mongoose is an elegant Node.js library that simplifies MongoDB interactions by providing a schema-based modeling and querying system, enhancing the developer experience.'
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
                            buttonOneTitle='share'
                            buttonTwoTitle='Learn More'
                        ></ThemeCard>
                    </Grid>
            })
        }
    </Grid>)
}

export default DatabaseTechnology;