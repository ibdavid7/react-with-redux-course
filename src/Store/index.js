import {configureStore} from "@reduxjs/toolkit";
import {reset} from "./actions";
import {moviesReducer, addMovie, removeMovie, movieSelector} from "./Slices/moviesSlice";
import {songsReducer, addSong, removeSong} from "./Slices/songsSlice";
import {carFormReducer, updateName, updateCost, resetCarForm} from "./Slices/carFormSlice";
import {carListReducer, addCar, removeCar, updateSearchTerm} from "./Slices/carListSlice";
import {usersReducer, fetchUsers, addUser, deleteUser} from "./Slices/usersSlice";
import {AlbumsApi, useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation} from "./ApiRTKQ/AlbumsApi";
import {PhotosApi, useFetchPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation} from './ApiRTKQ/PhotosApi';
import {setupListeners} from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer,
        carForm: carFormReducer,
        carList: carListReducer,
        users: usersReducer,
        //albums: AlbumsApi.reducer,  - dont write out as hardcoded value
        [AlbumsApi.reducerPath]: AlbumsApi.reducer,
        [PhotosApi.reducerPath]: PhotosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(AlbumsApi.middleware)
            .concat(PhotosApi.middleware);
    }
});
// window.store = store
setupListeners(store.dispatch);

export {
    store, reset,
    addSong, removeSong,
    addMovie, removeMovie, movieSelector,
    updateName, updateCost, resetCarForm,
    addCar, removeCar, updateSearchTerm,
    fetchUsers, addUser, deleteUser,
    useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation,
    useFetchPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation,
};


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