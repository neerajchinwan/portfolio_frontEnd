import React from "react";
import {
    Card,
    CardMedia,
    Typography,
    CardContent,
    Button,
    CardActions
} from '@mui/material';

function ThemeCard({name, description, buttonOneTitle, buttonTwoTitle, url}) {
    return (<Card aria-label="Technology Card">
        <CardMedia
            sx={{ height: 140 }}
            image={url}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="#333">
                {description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">{buttonOneTitle}</Button>
            <Button size="small">{buttonTwoTitle}</Button>
        </CardActions>
    </Card>)
}

export default ThemeCard;