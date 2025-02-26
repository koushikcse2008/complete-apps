import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApiData } from "../baseurl/AxiosMethods";

const initialState = ({
    aboutus_data: [],
    services_data: [],
    status: 'idle'
}); 

export const FetchAboutus = createAsyncThunk("home/aboutus", async () => {
    try {
        let res = await getApiData("home");
        return res?.data[0].aboutus;
    } catch(error) {
        console.log(error);
    }
});

export const FetchServices = createAsyncThunk("home/services", async () => {
    try {
        let res = await getApiData("home");
        return res?.data[0].services;
    } catch(error) {
        console.log(error);
    }
});

export const HomeSlice = createSlice({
    name: "homeslice",
    initialState,
    reducers: {},
    extraReducers: {
        [FetchAboutus.pending]: (state) => {
            state.status = "loading";
        },
        [FetchAboutus.fulfilled]: (state, {payload}) => {            
            state.status = "idle";
            state.aboutus_data = payload;
        },
        [FetchAboutus.rejected]: (state) => {
            state.status = "reject";
        },

        [FetchServices.pending]: (state) => {
            state.status = "loading";
        },
        [FetchServices.fulfilled]: (state, {payload}) => {            
            state.status = "idle";
            state.services_data = payload;
        },
        [FetchServices.rejected]: (state) => {
            state.status = "reject";
        }
    }
});

