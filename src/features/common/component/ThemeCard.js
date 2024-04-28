import React from "react";
import {
    Card,
    CardMedia,
    Typography,
    CardContent,
    Button,
    CardActions,
    Link
} from '@mui/material';

function ThemeCard({name, description, url, buttonUrl}) {
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
            <Button size="small"><Link href = {buttonUrl} target='_blank'>learn more</Link></Button>
        </CardActions>
    </Card>)
}

export default ThemeCard;