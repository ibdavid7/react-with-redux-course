import {createSlice} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addCar } from "../";

const carFormSlice = createSlice({
    name: 'carForm',
    initialState: {
        name: null,
        cost: 0,
    },
    reducers: {
        updateName(sliceState, action) {
            sliceState.name = action.payload;
        },
        updateCost(sliceState, action) {
            sliceState.cost = action.payload;
        },
        resetCarForm(sliceState, action) {
            return {
                name: null,
                cost: 0,
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addCar, (state, action) => ({
            name: null,
            cost: 0,
        }));
    }
})

export const {updateName, updateCost, resetCarForm} = carFormSlice.actions;
export const carFormReducer = carFormSlice.reducer;