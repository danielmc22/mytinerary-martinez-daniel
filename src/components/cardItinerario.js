
// --  Card  -- Card 
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import  "../styles/cardItinerario.css"
/* import itinerariosActions from "../redux/actionsCreators/itinerariosActions" */



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(180deg)' : 'rotate(10deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  


  export default function CardItinerario({itinerario}) {
    const [expanded, setExpanded] = React.useState(false);
    
    console.log(itinerario)

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (

      <div className='containerCardItinerarios' >
      <Card className='cardItinerario' >
        <CardHeader
          avatar={
            <Avatar className='avatar'>
            <img className='imgCard' src={itinerario.imageUser}  alt="imagen-titulo-cards"></img>
              
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={itinerario.name}
          subheader={itinerario.userName}
        />
        <CardMedia
          component="img"
          height="194"
          image={itinerario.image}
          alt="Paella dish"
        />
        <CardContent >
          <Typography variant="body2" className='txtItinerario' color="text.secondary">
          <p> {itinerario.hashtags} </p>
          <p> {"Price: " + itinerario.price} </p>
          <p> {"You will spend aproximelly : " + itinerario.hours + " hours in this itinerary"} </p>
          
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph className='txtItinerario'>{"The main activities in this itinerary: " }</Typography>
            <Typography paragraph className='txtItinerario'>
            {itinerario.activities}
            </Typography>
            
            
          </CardContent>
        </Collapse>
      </Card>
      </div>
    );
  }

