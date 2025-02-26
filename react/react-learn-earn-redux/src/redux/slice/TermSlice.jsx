import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = ({
    term_data: {},
    status: 'idle'
});

export const FetchTerm = createAsyncThunk('term/details', async () => {
    try {
        let res = await axios.get('http://localhost:3000/terms-conditions');
        console.log(res.data);
        return res?.data;
    }
    catch (error) {
        console.log(error);
    }
});

export const TermSlice = createSlice({
    name: "termDetails",
    initialState,
    reducers: {},
    extraReducers: {
        [FetchTerm.pending]: (state) => {
            state.status = 'Loading';
        },
        [FetchTerm.fulfilled]: (state, {payload}) => {
            state.status = 'idle';
            state.term_data = payload;
        },
        [FetchTerm.rejected]: (state) => {
            state.status = 'rejected';
        }

    }
});