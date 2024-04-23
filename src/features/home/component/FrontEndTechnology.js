import React from "react";
import ThemeCard from "../../common/component/ThemeCard";
import { Grid } from '@mui/material';

function FrontEndTechnology(){

    const frontEndTechnologyImages = [
        { 
            imageUrl: 'images/html.png',
            name: 'HTML',
            description: 'HTML (Hypertext Markup Language) is the standard for creating web pages. It uses tags to structure content, from text to images, for display in web browsers.'
        },
        { 
            imageUrl: 'images/css.jpg', 
            name: 'CSS',
            description: 'CSS (Cascading Style Sheets) is a stylesheet language used in web development to control the design and layout of HTML elements for attractive and responsive web design.'
        },
        { 
            imageUrl: 'images/js.png', 
            name: 'JS',
            description: 'JavaScript (JS) is a versatile programming language for web development. It adds interactivity and dynamic behavior to websites, enhancing user experiences and enabling complex web applications.'
        },
        { 
            imageUrl: 'images/mui.png', 
            name: 'MUI',
            description: "MUI (Material-UI) is a popular React UI framework. It offers pre-designed components and styles, based on Google's Material Design, for building modern, responsive, and visually appealing web applications."
        },
        { 
            imageUrl: 'images/bootstrap.jpeg', 
            name: 'BOOTSTRAP',
            description: 'Bootstrap is a widely used front-end framework. It provides a collection of pre-designed UI components and a responsive grid system to streamline web development and create mobile-friendly websites.'
        },
        { 
            imageUrl: 'images/react.png', 
            name: 'REACT', 
            description: 'React is a JavaScript library for building user interfaces. It simplifies UI development by allowing developers to create reusable components for responsive and interactive web applications.'
        },
        { 
            imageUrl: 'images/redux.png', 
            name: 'REDUX',
            description: 'Redux is a predictable state management library for JavaScript applications. It centralizes and manages application state, making it easier to handle data and state changes in complex applications.'
        }
    ]

    return(<Grid container spacing={5}>
        {
            frontEndTechnologyImages.map((item, key) => {
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

export default FrontEndTechnology;