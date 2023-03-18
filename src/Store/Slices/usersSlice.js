import {createSlice, nanoid} from "@reduxjs/toolkit";
import fetchUsers from "../Thunks/fetchUsers";
import addUser from "../Thunks/addUser";
import deleteUser from "../Thunks/deleteUser";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    // reducers: {
    //     addUser(sliceState, action) {
    //         sliceState.data.push({
    //             ...action.payload,
    //             id: nanoid(),
    //         })
    //     },
    //     removeUser(sliceState, action) {
    //         sliceState.data = sliceState.data.filter((user) => user.id !== action.payload);
    //     }
    // },
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (sliceState, action) => {
            sliceState.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (sliceState, action) => {
            sliceState.isLoading = false;
            sliceState.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (sliceState, action) => {
            sliceState.isLoading = false;
            sliceState.error = action.error;
        });


        builder.addCase(addUser.pending, (sliceState, action) => {
            sliceState.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (sliceState, action) => {
            sliceState.isLoading = false;
            // console.log(action.payload)
            sliceState.data.push(action.payload);
        });
        builder.addCase(addUser.rejected, (sliceState, action) => {
            sliceState.isLoading = false;
            sliceState.error = action.error;
        });


        builder.addCase(deleteUser.pending, (sliceState, action) => {
            sliceState.isLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, (sliceState, action) => {
            sliceState.isLoading = false;
            // console.log(action);
            sliceState.data = sliceState.data.filter((user) => user.id !== action.payload);
        });
        builder.addCase(deleteUser.rejected, (sliceState, action) => {
            sliceState.isLoading = false;
            sliceState.error = action.error;
        });
    }
});


// export const { addUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
export {fetchUsers, addUser, deleteUser};