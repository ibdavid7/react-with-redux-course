import {createSlice} from "@reduxjs/toolkit";
import {reset} from "../actions";

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(sliceState, action) {
            sliceState.push(action.payload);
        },
        removeMovie(sliceState, action) {
            const index = sliceState.indexOf(action.payload);
            sliceState.splice(index, 1);
        }
    },
    extraReducers: (builder) => {
        // hard-coded action type
        // builder.addCase('song/reset', (sliceState, action) => []);
        // replaced hard coded 'song/reset' with a reference to the action creaton function
        // removed and replaced by 'app/reset'
        // builder.addCase(songsSlice.actions.reset, (sliceState, action) => []);
        builder.addCase(reset, (sliceState, action) => []);
    },
})

export const {addMovie, removeMovie} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;

// maintain and export one central selector in case the shape of stateSlice changes, only one place to change it
export const movieSelector = (state) => state.movies;