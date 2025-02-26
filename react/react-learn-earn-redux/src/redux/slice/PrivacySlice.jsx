import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApiData } from "../baseurl/AxiosMethods";

const initialState = ({
    privacy_data: {},
    status: 'idle'
});

export const FetchPrivacy = createAsyncThunk("fetch/privacy", async () => {
    try {
        let res = await getApiData("privacy-policy");
        return res?.data;
    } catch(error) {
        console.log(error);
    }
});

export const PrivacySlice = createSlice({
    name: "privacyData",
    initialState,
    reducers: {},
    extraReducers: {
        [FetchPrivacy.pending]: (state) => {
            state.status = "Loading";
        },

        [FetchPrivacy.fulfilled]: (state, {payload}) => {
            state.status = "idle";
            state.privacy_data = payload;
        },
        
        [FetchPrivacy.rejected]: (state) => {
            state.status = "rejected";
        }
    }
});