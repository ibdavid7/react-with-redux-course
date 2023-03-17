import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addUser = createAsyncThunk('user/add', async () => {
    const response = await axios.post('http://localhost:3001/users', {
        name: faker.name.fullName(),
    })
    return response;
})

export default addUser;