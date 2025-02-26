import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApiData } from "../baseurl/AxiosMethods";

const initialState = ({
    sections_data: [],
    testimonials_data: [],
    clients_data: [],
    works_data: [],
    status: 'idle'
}); 

export const FetchSection = createAsyncThunk("about/section", async () => {
    try {
        let res = await getApiData("about-us");
        return res?.data[0]?.sections;
    } catch(error) {
        console.log(error);
    }
});

export const FetchTestimonial = createAsyncThunk("about/testimonial", async () => {
    try {
        let res = await getApiData("about-us");
        return res?.data[1].testimonials;
    } catch(error) {
        console.log(error);
    }
});

export const FetchClient = createAsyncThunk("about/client", async () => {
    try {
        let res = await getApiData("about-us");
        return res?.data[2].clients;
    } catch(error) {
        console.log(error);
    }
});

export const FetchWork = createAsyncThunk("about/work", async () => {
    try {
        let res = await getApiData("about-us");
        console.log(res?.data[3].works);
        return res?.data[3].works;
    } catch(error) {
        console.log(error);
    }
});

export const AboutusSlice = createSlice({
    name: "aboutslice",
    initialState,
    reducers: {},
    extraReducers: {
        [FetchSection.pending]: (state) => {
            state.status = "loading";
        },
        [FetchSection.fulfilled]: (state, {payload}) => {            
            state.status = "idle";
            state.sections_data = payload;
        },
        [FetchSection.rejected]: (state) => {
            state.status = "reject";
        },

        [FetchTestimonial.pending]: (state) => {
            state.status = "loading";
        },
        [FetchTestimonial.fulfilled]: (state, {payload}) => {            
            state.status = "idle";
            state.testimonials_data = payload;
        },
        [FetchTestimonial.rejected]: (state) => {
            state.status = "reject";
        },

        [FetchClient.pending]: (state) => {
            state.status = "loading";
        },
        [FetchClient.fulfilled]: (state, {payload}) => {            
            state.status = "idle";
            state.clients_data = payload;
        },
        [FetchClient.rejected]: (state) => {
            state.status = "reject";
        },

        [FetchWork.pending]: (state) => {
            state.status = "loading";
        },
        [FetchWork.fulfilled]: (state, {payload}) => {            
            state.status = "idle";
            state.works_data = payload;
        },
        [FetchWork.rejected]: (state) => {
            state.status = "reject";
        }
    }
});

