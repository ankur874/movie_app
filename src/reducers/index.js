import { ADD_MOVIES,ADD_FAVOURITE,REMOVE_FAVOURITE } from "../actions";

const initialMovieState={
    list: [],
    favourites: [],
};

export  function movie(state=initialMovieState,action){
    if(action.type===ADD_MOVIES){
          return {
              ...state,
              list:action.movies,
          };
    }
    else if(action.type===ADD_FAVOURITE){
        return{
            ...state,
            favourites:[...state.favourites,action.movie],
        };
    }
    else if(action.type===REMOVE_FAVOURITE){
        const newFavourites=[...state.favourites];
        const index=newFavourites.indexOf(action.movie);
        if(index>-1){
            newFavourites.splice(index,1);
        }
        return{
            ...state,
            favourites:newFavourites,
        }
    }
    return state;
}

const initialSearchState={
    results:{}
}

const initialRootState={
    movie:initialMovieState,
    search:initialSearchState,
}
export function search(state=initialSearchState,action){
    return state;
}
export default function rootReducer(state=initialRootState,action){
    return {
        movie:movie(state.movie,action),
        search:search(state.search,action)
    };
}
