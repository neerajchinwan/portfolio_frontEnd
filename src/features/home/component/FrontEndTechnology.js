import React from "react";
import ThemeCard from "../../common/component/ThemeCard";
import { Grid } from '@mui/material';

function FrontEndTechnology(){

    const frontEndTechnologyImages = [
        { 
            imageUrl: 'Images/html.png',
            name: 'HTML',
            description: 'HTML (Hypertext Markup Language) is the standard for creating web pages. It uses tags to structure content, from text to images, for display in web browsers.',
            url: 'https://www.w3schools.com/html/'
        },
        { 
            imageUrl: 'Images/css.jpg', 
            name: 'CSS',
            description: 'CSS (Cascading Style Sheets) is a stylesheet language used in web development to control the design and layout of HTML elements for attractive and responsive web design.',
            url: 'https://css-tricks.com/'
        },
        { 
            imageUrl: 'Images/js.png', 
            name: 'JS',
            description: 'JavaScript (JS) is a versatile programming language for web development. It adds interactivity and dynamic behavior to websites, enhancing user experiences and enabling complex web applications.',
            url: 'https://www.w3schools.com/js/'
        },
        { 
            imageUrl: 'Images/mui.png', 
            name: 'MUI',
            description: "MUI (Material-UI) is a popular React UI framework. It offers pre-designed components and styles, based on Google's Material Design, for building modern, responsive, and visually appealing web applications.",
            url: 'https://mui.com/'
        },
        { 
            imageUrl: 'Images/bootstrap.jpeg', 
            name: 'BOOTSTRAP',
            description: 'Bootstrap is a widely used front-end framework. It provides a collection of pre-designed UI components and a responsive grid system to streamline web development and create mobile-friendly websites.',
            url: 'https://getbootstrap.com/'
        },
        { 
            imageUrl: 'Images/react.png', 
            name: 'REACT', 
            description: 'React is a JavaScript library for building user interfaces. It simplifies UI development by allowing developers to create reusable components for responsive and interactive web applications.',
            url: 'https://react.dev/'
        },
        { 
            imageUrl: 'Images/redux.png', 
            name: 'REDUX',
            description: 'Redux is a predictable state management library for JavaScript applications. It centralizes and manages application state, making it easier to handle data and state changes in complex applications.',
            url: 'https://redux-toolkit.js.org/'
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
                            buttonUrl={item.url}
                        ></ThemeCard>
                    </Grid>
            })
        }
    </Grid>)
}

export default FrontEndTechnology;