import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postApiData } from "../baseurl/AxiosMethods";

const initialState = ({
    contact_data: {},
    status: 'idle'
});

export const FetchContact = createAsyncThunk("fetch/contact", async ({ id, user_name, user_email, user_subject, user_message, added_on }) => {
    try {
        await postApiData("contacts", { id, user_name, user_email, user_subject, user_message, added_on });
        // return res?.data;
    } catch(error) {
        console.log(error);
    }
});

export const ContactSlice = createSlice({
    name: "contactData",
    initialState,
    reducers: {},
    extraReducers: {
        [FetchContact.pending]: (state) => {
            state.status = "Loading";
        },

        [FetchContact.fulfilled]: (state, {payload}) => {
            state.status = "idle";
            state.privacy_data = payload;
        },
        
        [FetchContact.rejected]: (state) => {
            state.status = "rejected";
        }
    }
});