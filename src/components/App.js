import Moviecard from '../components/Moviecard';
import Navbar from '../components/Navbar';
import { data } from '../data';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { addMovies } from '../actions';
import {storeContext} from '../index';

class App extends React.Component {
  constructor(){
    super();
      this.state={
        showFav:false,
      }
  }
  componentDidMount() {
    console.log("app component comes here");
    this.props.store.subscribe(() => {

      this.forceUpdate();
    });
    this.props.store.dispatch(addMovies(data));
    console.log('mount');
  }
  isFavourite=(movieFromFunction)=>{
    const {movie}=this.props.store.getState();
     const {favourites}=movie;
     const index=favourites.indexOf(movieFromFunction);
     if(index===-1){
       return false;
     }
     else{
       return true;
     }
  }
  printMovies=(movies)=>{
    movies.map((movie) => {
      console.log('listssss');
      return <Moviecard movie={movie} dispatch={this.props.store.dispatch} isFav={this.isFavourite(movie)}/>
    }
    );
  }
   
  render() {
    console.log("render");
    console.log(this.props.store.getState());
    const {movie}=this.props.store.getState();
    const {list,favourites} = movie;
    return(
            <div className="App">
              <Navbar />
              <div style={{ backgroundColor: 'white' }} className="main">
                <div className="">
                  <button className="tab"  onClick={()=>{
                    this.setState({showFav:false});}}>Movies</button>
                  <button className="tab"onClick={()=>{  console.log('fav btn clicked',this.state.showFav);this.setState(()=>{
                     this.setState({showFav:true});
                  });}}>Favourites</button>
                </div>
                <div className='list'>
                  {
                    this.state.showFav?
                     favourites.map((movie) => {
                      return <Moviecard movie={movie} dispatch={this.props.store.dispatch} isFav={this.isFavourite(movie)}/>
                    }
                    )
                    :
                    list.map((movie) => {
                      return <Moviecard movie={movie} dispatch={this.props.store.dispatch} isFav={this.isFavourite(movie)}/>
                    }
                    )
                   
                  }
                </div>
              </div>
            </div>
    );
   
  }
}


class AppWrapper extends React.Component{
   render(){
     console.log("inside app wrapper ");
     return(
       <storeContext.Consumer>
         {
           (store)=><App store={store}></App>
           
         }
       </storeContext.Consumer>
     );
   }
}
export default AppWrapper;
