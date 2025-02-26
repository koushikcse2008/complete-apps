import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApiData } from "../baseurl/AxiosMethods";

const initialState = ({
    price_data: [],
    faq_data: [],
    status: 'idle'
}); 

export const FetchPrice = createAsyncThunk("fetch/price", async () => {
    try {
        let res = await getApiData("pricing");
        // console.log(res?.data[0]?.price);
        return res?.data[0]?.price;
    } catch(error) {
        console.log(error);
    }
});

export const FetchFaq = createAsyncThunk("fetch/faq", async () => {
    try {
        let res = await getApiData("pricing");
        // console.log(res?.data[0]?.faq);
        return res?.data[0]?.faq;
    } catch(error) {
        console.log(error);
    }
});

export const PricingSlice = createSlice({
    name: "faqslice",
    initialState,
    reducers: {},
    extraReducers: {
        [FetchPrice.pending]: (state) => {
            state.status = "loading";
        },
        [FetchPrice.fulfilled]: (state, {payload}) => {            
            state.status = "idle";
            state.price_data = payload;
        },
        [FetchPrice.rejected]: (state) => {
            state.status = "reject";
        },

        [FetchFaq.pending]: (state) => {
            state.status = "loading";
        },
        [FetchFaq.fulfilled]: (state, {payload}) => {            
            state.status = "idle";
            state.faq_data = payload;
        },
        [FetchFaq.rejected]: (state) => {
            state.status = "reject";
        }
    }
});

