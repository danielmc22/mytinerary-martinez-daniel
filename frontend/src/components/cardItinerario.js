// --  Card  -- Card 
import * as React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
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
import {connect} from 'react-redux';
import itinerariosActions from "../redux/actionsCreators/itinerariosActions" 
import { useParams } from 'react-router-dom';



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
  

  const CardItinerario = ({itinerario}) => {

    console.log(itinerario)

    const [expanded, setExpanded] = React.useState(false);
    const [like, setLike] = useState(0)
    const [itinerarie, setItinerarie] = useState()
    const [reload, setReload] = useState(false)
    const { id } = useParams() 
     

    /* useEffect(() => {
      props.obtenerUnItinerario(id)
        .then(response => console.log(response.data) )
    }, [reload]) */


    /* async function likesOrDislikes() {
      console.log(itinerario._id)
      await props.likeDislike(props.itinerario._id)
      
      setReload(!reload)
    }  */


    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (

      <div className='containerCardItinerarios' >
      <Card className='cardItinerario' >
        <CardHeader
          avatar={
            <Avatar className='avatar'>
            <img className='imgCardZ' src={itinerario.imageUser}  alt="imagen-titulo-cards"></img>
              
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
          alt="Itinerario "
        />
        <CardContent >
          <Typography variant="body2" className='txtItinerario' color="white">
          <p> { (itinerario.hashtags) } </p>
          <p> {"Price: " + itinerario.price} </p>
          <p> {"You will spend aproximatelly : " + itinerario.hours + " hours in this itinerary"} </p>
          
          </Typography>
        </CardContent>
        <CardActions disableSpacing>

          <IconButton aria-label="add to favorites">

          
                 <button >  
                <span style={{ color: "red", fontSize:30 }} class="material-icons">like</span> 
                <span style={{  fontSize:30 }}class="material-icons">dislike</span> </button>

          <span style={{  fontSize:30 }} class="material-icons">like no user connected</span>)

          <h3 style={{  color:"black ",fontSize:30 }}>{itinerario?.likes.length}</h3>

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


            <div className='comments'> comment </div>
            
            
          </CardContent>
        </Collapse>
      </Card>
      </div>
    );
  }

  const mapStateToProps = (state) => {

    return{
      userReducer: state.userReducer.user,   
    }
    }
    
    const mapDispatchToProps = {
      obtenerUnItinerario: itinerariosActions.obtenerUnItinerario,
      likeDislike: itinerariosActions.likeDislike
    }     
    
    export default connect(mapStateToProps,mapDispatchToProps)(CardItinerario)
