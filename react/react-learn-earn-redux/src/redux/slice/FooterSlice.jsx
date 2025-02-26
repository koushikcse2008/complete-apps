import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApiData } from "../baseurl/AxiosMethods";

const initialState = ({
    footerData: {},
    status: "idle"
});

export const FetchFooter = createAsyncThunk("footer/details", async () => {
    try {
        let res = await getApiData("footer");
        return res?.data;        
    }
    catch(error) {
        console.log(error);
    }
});

export const FooterSlice = createSlice({
    name: "footerDetails",
    initialState,
    reducers: {},
    extraReducers: {
        [FetchFooter.pending]: (state) => {
            state.status = "loading......";     
        },
        [FetchFooter.fulfilled]: (state, { payload }) => {
            state.status = "idle";
            state.footerData = payload;
        },
        [FetchFooter.rejected]: (state) => {
            state.state = "reject";
        }
    }
});



