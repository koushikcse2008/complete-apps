import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApiData } from "../baseurl/AxiosMethods";

const initialState = ({
    team_data: [],
    status: 'idle'
}); 

export const FetchTeam = createAsyncThunk("fetch/team", async () => {
    try {
        let res = await getApiData("teams");
        return res?.data;
    } catch(error) {
        console.log(error);
    }
});

export const TeamSlice = createSlice({
    name: "teamslice",
    initialState,
    reducers: {},
    extraReducers: {
        [FetchTeam.pending]: (state) => {
            state.status = "loading";
        },
        [FetchTeam.fulfilled]: (state, {payload}) => {            
            state.status = "idle";
            state.team_data = payload;
        },
        [FetchTeam.rejected]: (state) => {
            state.status = "reject";
        }
    }
});

