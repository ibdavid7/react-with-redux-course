import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const AUTHORS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = []

export const fetchAuthors = createAsyncThunk('authors/fetchAuthors', async () => {
    const response = await axios.get(AUTHORS_URL);
    return response.data
})

const authorsSlice = createSlice({
    name: 'authors',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAuthors.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllAuthors = (state) => state.authors;

export const authorsReducer = authorsSlice.reducer;