import {createSlice} from "@reduxjs/toolkit";

const carFormSlice = createSlice({
    name: 'carform',
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
    }
})

export const {updateName, updateCost, resetCarForm} = carFormSlice.actions;
export const carFormReducer = carFormSlice.reducer;