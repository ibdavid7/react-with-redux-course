import {configureStore} from "@reduxjs/toolkit";
import {reset} from "./actions";
import {moviesReducer, addMovie, removeMovie} from "./Slices/moviesSlice";
import {songsReducer, addSong, removeSong} from "./Slices/songsSlice";


const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer,
    }
});

export {store, reset, addSong, removeSong, addMovie, removeMovie};

//
// console.log(songsSlice.name);
// console.log(songsSlice.actions);
//
// console.log(store);
// console.log(songsSlice.reducer);
//
// const startingState = store.getState();
// console.log(JSON.stringify(startingState));
//
// store.dispatch({
//     type: 'song/addSong',
//     payload: 'a new song!!!'
// })
//
// store.dispatch(songsSlice.actions.addSong('Beautiful Day'));
//
// const updatedstate = store.getState();
// console.log(JSON.stringify(updatedstate));