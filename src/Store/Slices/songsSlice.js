import {createSlice} from "@reduxjs/toolkit";
import {reset} from "../actions";

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        // remove and replace by new 'app/reset'
        // reset(sliceState, action) {
        //     return [];
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(reset, (sliceState, action) => []);
    }
})

export const {addSong, removeSong} = songsSlice.actions;
export const songsReducer = songsSlice.reducer;