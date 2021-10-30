import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { applyMiddleware, createStore } from 'redux';
import { movie, rootReducer } from './reducers';
import AppWrapper from './components/App';
// import { Provider } from 'react';

// const logger=function({dispatch,getState}){
//       return function(next){
//             return function(action){
             
//             }
//       }
// }

const logger=({dispatch,getState})=>(next)=>(action)=>{
  console.log('ACTION_TYPE, ',action.type);
  next(action);
}
const store=createStore(rootReducer,applyMiddleware(logger));
export const storeContext=createContext();

class Provider extends React.Component{
  render(){
    const {store}=this.props;
    return(
      <storeContext.Provider value={store}>
         {this.props.children}
      </storeContext.Provider>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>

<Provider store={store}>
<AppWrapper  />
</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

