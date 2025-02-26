import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApiData } from "../baseurl/AxiosMethods";

const initialState = ({
    category_data: [],
    status: 'idle'
}); 

export const FetchCategory = createAsyncThunk("fetch/category", async () => {
    try {
        let res = await getApiData("blogs");
        return res?.data;
    } catch(error) {
        console.log(error);
    }
});

export const CategorySlice = createSlice({
    name: "categoryslice",
    initialState,
    reducers: {},
    extraReducers: {
        [FetchCategory.pending]: (state) => {
            state.status = "loading";
        },
        [FetchCategory.fulfilled]: (state, {payload}) => {            
            state.status = "idle";
            state.category_data = payload;
        },
        [FetchCategory.rejected]: (state) => {
            state.status = "reject";
        }
    }
});

