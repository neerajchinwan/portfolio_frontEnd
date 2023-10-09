import React from "react";
import {
    Card,
    CardMedia,
    Typography,
    CardContent,
    Button,
    CardActions
} from '@mui/material';

function ThemeCard(props) {
    return (<Card aria-label="Technology Card">
        <CardMedia
            sx={{ height: 140 }}
            image={props.url}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.name}
            </Typography>
            <Typography variant="body2" color="#333">
                {props.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">{props.buttonOneTitle}</Button>
            <Button size="small">{props.buttonTwoTitle}</Button>
        </CardActions>
    </Card>)
}

export default ThemeCard;