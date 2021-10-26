import React from "react";
import { addFavourite, removeFavourite } from "../actions";

class Moviecard extends React.Component{

    addToFavourite=()=>{
        this.props.dispatch(addFavourite(this.props.movie));
    }
    removeFromFavourite=()=>{
       this.props.dispatch(removeFavourite(this.props.movie));
    }
    render(){
        
        const {movie}=this.props;
        let isFav=this.props.isFav;
        return(
            <div style={styles.moieCard} className='movie-card'>
               <div style={styles.leftStyle} className='left'>
                   <img style={styles.moviePoster} alt='Movie-poster' src={movie.posterUrl}/>
               </div>
               <div style={styles.rightStyle} className='right'>
                   <div style={styles.titleStyle} className='title'>{movie.title}</div>
                   <div style={styles.plotStyle} className='plot'>{movie.plot}</div>
                   <div style={styles.footerStyle} className='footer'>
                       <div style={styles.releaseYear} className='release-year'>Release year: {movie.year}</div>
                       {
                           isFav?
                           <button style={styles.UnfavouriteBtn} onClick={this.removeFromFavourite} className='btn btn-danger favourite-btn'>UnFavourite</button>
                           :
                           <button style={styles.favouriteBtn} onClick={this.addToFavourite} className='btn btn-success favourite-btn'>Favourite</button>
                       }
                      
                   </div>

               </div>
            </div>
        );
    }
}
const styles={
    moieCard:{
       display:'flex',
       width:'75vw',
       backgroundColor:'#D3D3D3',
      
       margin:'10px auto',
       padding:'10px',
       height:'40vh',
       alignItems:'center',
       borderRadius:'10px',
    },
    moviePoster:{
        height:'38vh',
        borderRadius:'10px',
    },
   leftStyle:{ },
    rightStyle:{
        marginLeft:'20px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        height:'30vh',

        justifyContent:"space-around",
    },
    titleStyle:{
        fontSize:'16px',
        fontWeight:'bold',
        textTransform:'uppercase',
    },
    plotStyle:{
        textAlign:'center'
    },
    footerStyle:{
        display:"flex",
        alignItems:'center',
        width:'90%',
        justifyContent:'space-between',
    },
    releaseYear:{
        fontWeight:'bolder',
    },
    favouriteBtn:{
        backgroundColor:'#FF69B4',
        border:'0px solid red',
    },
    UnfavouriteBtn:{
        backgroundColor:'red',
        border:'0px solid red',
    }
};
export default Moviecard;