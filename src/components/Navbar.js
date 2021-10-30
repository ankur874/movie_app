import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { storeContext } from "..";
class Navbar extends React.Component {

    render() {
        return (
            <div style={styles.navStyle} className='nav'>
                <div style={styles.searchContainer} className='search-container'>
                    <input style={styles.searchContainerTyper}></input>
                    <button  style={styles.searchBtn} id='search-btn'>search</button>
                   
                </div>
            </div>
        );
    }
}
const styles = {
    navStyle: {
        backgroundColor: "#F9F3DF",
        height: '7vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    searchContainer: {},
    searchContainerTyper: {
        backgroundColor:"#D7E9F7",
        margin: "5px",
        height:"4vh",
        width:"20vw",
        border: "0px",
        overflow:"none",
       border:'2px solid grey'
    },
    searchBtn: {
        backgroundColor: "yellow",
        borderRadius: '10px',
        fontWeight: "bolder",
    },
};

class NavbarWrapper extends React.Component{
    render(){
        return(
          <storeContext.Consumer>
              {
                  (store)=><Navbar ></Navbar>
              }
          </storeContext.Consumer>
        );
    }
}
export default Navbar;