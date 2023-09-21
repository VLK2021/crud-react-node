import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../services";



export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const usersA = await userService.getAll();
            return usersA;
        }catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const initialState = {
    usersArr: [],
    status: null,
    error: null,
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(getAllUsers.pending, state => {
                state.status = 'Loading...'
                state.error = null
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.usersArr = action.payload
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            })
    }
});

export default userSlice.reducer;