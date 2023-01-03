
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard(props) {
  return (
    <Card sx={{ minWidth: 280,margin:1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"15px"}}>
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.price}$
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
