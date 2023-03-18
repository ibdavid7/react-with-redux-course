import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteUser = createAsyncThunk(
    'user/delete',
    async (id) => {
        const response = await axios.delete(`http://localhost:3001/users/${id}`);
        // console.log(response);
        await pause(1000);
        return id;

    }
);

const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}
export default deleteUser;