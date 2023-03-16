import { createSlice, nanoid } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: { data: [] },
    reducers: {
        addUser(sliceState, action) {
            sliceState.data.push({
                ...action.payload,
                id: nanoid(),
            })
        },
        removeUser(sliceState, action) {
            sliceState.data = sliceState.data.filter((user) => user.id !== action.payload);
        }
    }
});


export const { addUser } = usersSlice.actions;
export const usersReducer = usersReducer.reducer;