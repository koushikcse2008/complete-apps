import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApiData } from "../baseurl/AxiosMethods";

const initialState = ({
    blogs_data: [],
    status: 'idle'
}); 

export const FetchBlog = createAsyncThunk("fetch/blog", async (category) => {
    try {
        let api_url = (category != "") ? `blogs?category=${category}` : 'blogs';
        let res = await getApiData(api_url);
        // console.log(api_url);
        return res?.data;
    } catch(error) {
        console.log(error);
    }
});

export const BlogSlice = createSlice({
    name: "blogslice",
    initialState,
    reducers: {},
    extraReducers: {
        [FetchBlog.pending]: (state) => {
            state.status = "loading";
        },
        [FetchBlog.fulfilled]: (state, {payload}) => {            
            state.status = "idle";
            state.blogs_data = payload;
        },
        [FetchBlog.rejected]: (state) => {
            state.status = "reject";
        }
    }
});

