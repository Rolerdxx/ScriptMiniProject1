// // import "./critem.css";

// const Critem = (props) => {
//   return (
//     <div className="card" id="itemmain">
//       {/* <div className="row" id="itemdiv" >
//             </div> */}
//       <img src={props.img} alt={props.title} className="card-img-top" />
//       <div className="card-body">
//         <div className="card-title">{props.title}</div>
//         <div style={{ fontSize: "30px" }}>{props.price}</div>
//       </div>
//     </div>
//   );
// };

// export default Critem;

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// export default function Critem(props) {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image={props.img}
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {props.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {props.price}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }

// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// export default function ImgMediaCard(props) {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {props.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {props.price}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

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
