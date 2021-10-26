import Moviecard from '../components/Moviecard';
import Navbar from '../components/Navbar';
import { data } from '../data';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { addMovies } from '../actions';

class App extends React.Component {
  constructor(){
    super();
      this.state={
        showFav:false,
      }
  }
  componentDidMount() {
    this.props.store.subscribe(() => {

      this.forceUpdate();
    });
    this.props.store.dispatch(addMovies(data));
    console.log('mount');
  }
  isFavourite=(movie)=>{
     const {favourites}=this.props.store.getState();
     const index=favourites.indexOf(movie);
     if(index===-1){
       return false;
     }
     else{
       return true;
     }
  }

  // changeTab=(currentTab,showFav)=>{
  //   if(currentTab==='movies'){
  //     this.setState(()=>{
  //       showFav=false;
  //     });
     
  //   }
  //   else{
  //     this.setState(()=>{
  //       showFav=true;
  //     });
  //   }
  // }
  render() {
    console.log("render");
    console.log(this.props.store.getState());
    const {list,favourites} = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div style={{ backgroundColor: 'white' }} className="main">
          <div className="">
            <button className="tab"  onClick={()=>{
              console.log('movies button clicked',this.state.showFav)
              this.setState(()=>{this.state.showFav=false});}}>Movies</button>
            <button className="tab"onClick={()=>{  console.log('fav btn clicked',this.state.showFav);this.setState(()=>{
              this.state.showFav=true;
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

export default App;
