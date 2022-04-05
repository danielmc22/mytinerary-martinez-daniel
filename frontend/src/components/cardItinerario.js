// --  Card  -- Card 
import * as React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import "../styles/commentsStyles.css";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Swal from "sweetalert2";
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import  "../styles/cardItinerario.css"
import {connect} from 'react-redux';
import itinerariosActions from "../redux/actionsCreators/itinerariosActions" 
import commentsActions from '../redux/actionsCreators/commentsActions';
import { useParams } from 'react-router-dom';
import ActivityItem from './ActivityItem';
import activitiesActions from '../redux/actionsCreators/activitiesActions';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(180deg)' : 'rotate(1deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  

  const CardItinerario = (props) => {
    
    const [expanded, setExpanded] = React.useState(false);
    const [itinerarie, setItinerarie] = useState()
    const [inputText, setInputText] = useState()
    const [modifi, setModifi] = useState()
    const [activities, setActivities] = useState()
    
    const { id } = useParams() 
     
      useEffect(() => {
      props.obtenerUnItinerario(id)
      .then(response =>  setItinerarie (response.data.response.itinerario) )
    }, [!props.reload])  

    useEffect(() => {
      props.activityItinerary(props.id)
      .then((response) => { setActivities (response.response) })
    }, [!props.reload]) 

       async function cargarComentario(event) {
       
       const commentData = {
        itinerarie: props.id,
        comment: inputText,
      } 
     
      await props.addComment(commentData)
      .then(response => setItinerarie(response.data.response.nuevoComment), setInputText(""))
      props.setReload(!props.reload) 
      
    }   
    
      async function modificarComentario(event) {
      const commentData = {
        commentID: event.target.id,
        comment: modifi,
      }
      await props.modifiComment(commentData)
      props.setReload(!props.reload)
    } 

     async function eliminarComentario(event) {
      await props.deleteComment(event.target.id)
      props.setReload(!props.reload) 
    }  

    async function likesOrDislikes() {
      await props.likeDislike(props.id)
  
      props.setReload(!props.reload)
    }  

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    async function noUser() {
      Swal.fire({
        icon: 'error',
        title: 'Sign in!',
      })
    }
  
    console.log(props)

    return (

      <div className='containerCardItinerarios' >
      <Card className='cardItinerario' >
        <CardHeader
          avatar={
            <Avatar className='avatar'>
            <img className='imgCardZ' src={props.itinerario.imageUser}  alt="imagen-titulo-cards"></img>
              
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.itinerario.name}
          subheader={props.itinerario.userName}
        />
        <CardMedia
          component="img"
          height="194"
          image={props.itinerario.image}
          alt="Itinerario "
        />

        <CardContent >
          <Typography variant="body2" className='txtItinerario' color="white">
          <p> { (props.itinerario.hashtags) } </p>
          <p> {"Price: " + props.itinerario.price} </p>
          <p> {"You will spend aproximatelly : " + props.itinerario.hours + " hours in this itinerary"} </p>
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">

              <div>
              {props.userReducer ? (<IconButton aria-label="add to favorites" onClick={likesOrDislikes} >
        {props.likes.includes(props.userReducer.id) ? (
          <FavoriteIcon style={{ color:"lightblue", fontSize:36,  }} />
        ) : (
          <FavoriteBorderIcon style={{ color:"black", fontSize:36 }}/>
        )}

        <Typography style={{ color:"white", fontSize:36 }}>{props.likes.length}</Typography>
      </IconButton>
      ) : (
        <IconButton aria-label="Like" onClick={noUser}>
          <FavoriteBorderIcon />
          <Typography>{props.likes.length}</Typography>
        </IconButton>
      )}
              </div>

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

          <ActivityItem  activities={activities} />

            <Typography paragraph className='txtItinerario'>{"The main activities in this itinerary: " }</Typography>
            <Typography paragraph className='txtItinerario'>
            {props.itinerario.activities}
            </Typography>


              <div class="commentsArea accordion-body">

              
                {props.itinerario?.comments.map(comment =>
                  <>
                    {comment.userID !== props.userReducer?.id ?  
                      <div class="card cardComments " key={comment._id}>
                        <div class="card-header">
                          {comment.userID?.fullName}
                        </div>
                        <div class="card-body">
                          <p class="card-text">{comment.comment}</p>
                        </div>
                      </div> :

                      <div class="card cardComments">
                        <div class="card-header">
                          {comment.userID.fullName}
                        </div>
                        <div class="card-body ">
                          <textarea type="text" className="card-text textComments txt-area" onChange={(event) => setModifi(event.target.value)} defaultValue={comment.comment} />
                          <button id={comment._id} onClick={modificarComentario} class="btn btn-primary">Modificar</button>
                          <button id={comment._id} onClick={eliminarComentario} class="btn btn-primary">Eliminar</button>
                        </div>
                      </div>

                    }
                  </>
                )} 

                 {props.userReducer ?
                  <div class="card cardComments">
                    <div class="card-header txt-dejanos">
                      DEJANOS TU COMENTARIO
                    </div>
                    <div class="card-body ">
                      <textarea onChange={(event) => setInputText(event.target.value)} className="card-text textComments" value={inputText} />
                      <button onClick={cargarComentario} class="btn btn-primary">Send</button>
                    </div>
                  </div> :
                  <h1>Realiza singIn y dejanos tu comentario</h1> 
                 }
              </div>  
            
            
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
      addComment: commentsActions.addComment,
      modifiComment: commentsActions.modifiComment,
      deleteComment: commentsActions.deleteComment,
      likeDislike: itinerariosActions.likeDislike,
      activityItinerary: activitiesActions.activityItinerary,
    }     
    
    export default connect(mapStateToProps,mapDispatchToProps)(CardItinerario)
