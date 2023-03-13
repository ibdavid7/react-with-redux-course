import {createSlice, nanoid} from "@reduxjs/toolkit";

const carListSlice = createSlice({
    name: 'carList',
    initialState: {
        cars: [],
        searchTerm: ''
    },
    reducers: {
        addCar(sliceState, action) {
            // assume action.payload === {name: 'xx', cost: numb}
            sliceState.cars.push({
                ...action.payload,
                id: nanoid(),
            });
        },
        removeCar(sliceState, action) {
           /* assume action.payload === id of the car to remove

            const index = sliceState.cars.findIndex((car) => car.id === action.payload);
            if (index >= 0) {
                sliceState.cars.splice(index, 1);
            }*/

            // can do this with immer because this is reassigning element of obj, not top level object itself
            const filteredCarList = sliceState.cars.filter((car) => car.id !== action.payload);
            sliceState.cars = filteredCarList;
        },
        updateSearchTerm(sliceState, action) {
            sliceState.searchTerm = action.payload;
        }
    }
});

export const {addCar, removeCar} = carListSlice.actions;
export const carListReducer = carListSlice.reducer;