import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApiData } from "../baseurl/AxiosMethods";

const initialState = ({
    service_data: [],
    feature_data: [],
    status: 'idle'
}); 

export const FetchService = createAsyncThunk("fetch/service", async () => {
    try {
        let res1 = await getApiData("services");
        return res1?.data[0]?.services;
    } catch(error) {
        console.log(error);
    }
});

export const FetchFeature = createAsyncThunk("fetch/feature", async () => {
    try {
        let res1 = await getApiData("services");
        return res1?.data[0]?.features;
    } catch(error) {
        console.log(error);
    }
});

export const ServicesSlice = createSlice({
    name: "servslice",
    initialState,
    reducers: {},
    extraReducers: {
        [FetchService.pending]: (state) => {
            state.status = "loading";
        },
        [FetchService.fulfilled]: (state, {payload}) => {            
            state.status = "idle";
            state.service_data = payload;
        },
        [FetchService.rejected]: (state) => {
            state.status = "reject";
        },
        [FetchFeature.pending]: (state) => {
            state.status = "loading";
        },
        [FetchFeature.fulfilled]: (state, {payload}) => {            
            state.status = "idle";
            state.feature_data = payload;
        },
        [FetchFeature.rejected]: (state) => {
            state.status = "reject";
        }
    }
});

